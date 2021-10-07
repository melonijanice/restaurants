import React, { useEffect,useState } from 'react';
import { Link,navigate } from '@reach/router';
import axios from 'axios';
import Delete from './Delete';

const AllRestaurants=(props)=>
{
    const [restaurants, setrestaurants] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/restaurants/")
            .then((res) => {
                console.log(res.data);
                setrestaurants(res.data)})
            .catch(err=>console.log(err))

    }, [])
    //remove the restaurant object from array after deletion
    const updateAfterDelete =(deletedrestaurantId)=>{
        let filteredRestaurantArray=restaurants.filter((restaurantObj)=>{
            return restaurantObj._id!==deletedrestaurantId;
        })
        setrestaurants(filteredRestaurantArray);
    }
    return(<div><h1>All restaurants</h1>
            {restaurants.map((restaurant,idx)=>
            (<div key={idx}><Link to={"/restaurants/"+restaurant._id}>{restaurant.name}</Link> 
            <Delete id={restaurant._id} afterDelete={updateAfterDelete}/></div>))}
   </div>)



}
export default AllRestaurants;