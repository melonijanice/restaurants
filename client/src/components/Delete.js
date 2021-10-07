import React, { useEffect } from 'react';
import { Link,navigate } from '@reach/router';
import axios from 'axios';


const Delete=(props)=>
{
    const deleteHandler=(e)=>
{
    axios.delete("http://localhost:8000/api/restaurants/"+props.id)
        .then((res) => {
            console.log("Success");
            console.log(res);
            console.log("deletionID"+props.id)
            props.afterDelete(props.id);
            })
        .catch(err=>{
            console.log("Error");
            console.log(err.response.data.errors);})
}
    
    return(<div><button onClick={deleteHandler} className="deleteBtn">Delete</button></div>)
}
export default Delete;