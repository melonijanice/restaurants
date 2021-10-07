import React, { useState,useEffect } from 'react';
import { Link,navigate } from '@reach/router';
import axios from 'axios';
import Delete from './Delete';

const Details=(props)=>
{
    const [restaurant, setrestaurant] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/restaurants/"+props.id)
            .then((res) => {
                console.log(res.data);
                setrestaurant(res.data)})
            .catch(err=>console.log(err))

    }, [])
    const redirectAfterDelete=()=>
    {
        navigate("/restaurants");
    }
    
    return(<div><h1>Details restaurants</h1>
    <p>{restaurant.name}</p>
    <p>{restaurant.address}</p>
    <p>{restaurant.phone}</p>
    <p>{restaurant.cusine}</p>
    <p>{restaurant.hasDelivery?"Yes we deliver":"No we don't deliver"}</p>
    <p>{restaurant.homepage}</p>
    <p>{restaurant.hours}</p>
    <button onClick={e=>navigate(`/restaurants/${props.id}/edit`)} className="editBtn">Edit</button><Delete id={props.id} afterDelete={redirectAfterDelete}/></div>)
}
export default Details;