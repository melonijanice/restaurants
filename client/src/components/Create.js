import React, { useEffect,useState } from 'react';
import { Link,navigate } from '@reach/router';
import axios from 'axios';

const Create=(props)=>
{

    const [name, setName] = useState(""); 
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cusine, setcusine] = useState(""); 
    const [hasDelivery, sethasDelivery] = useState("false");
    const [hours, sethours] = useState("");
    const [homepage, sethomepage] = useState("");
    const cusines=["Bar","Burgers","Cafe","Chinese","Coffee Shop","Fine Dining","Ice Cream","Italian","Mexican","Pizza","Sandwiches","SeaFood","Steakhouse","Thai"];
    const [errors,setErrors]=useState({});
    const onSubmitHandler=(event)=>
    {
        event.preventDefault();
        const postData={name,address,phone,cusine,hasDelivery,hours,homepage};

        axios.post("http://localhost:8000/api/restaurants/",postData)
        .then((res) => {
            console.log("Success");
            console.log(res);
            navigate("http://localhost:3000/restaurants/"+res.data._id)
            })
        .catch(err=>{
            console.log("Error");
            console.log(err.response.data.errors);
            if(err.response.data.errors){
                setErrors(err.response.data.errors);
            }})
        
    }
    
    return(<div className="formDiv"><h1>Create restaurants</h1>
    <form onSubmit={onSubmitHandler}><div>
                <label>Name</label><br/>
                <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                {errors.name?<span className="error-text">{errors.name.message}</span>:""}
            </div>
            <div>
                <label>Address</label><br/>
                <input type="text" value={address} onChange = {(e)=>setAddress(e.target.value)}/>
                {errors.address?<span className="error-text">{errors.address.message}</span>:""}
            </div>
            <div>
                <label>phone</label><br/>
                <input type="text" value={phone} onChange = {(e)=>setPhone(e.target.value)}/>
                {errors.phone?<span className="error-text">{errors.phone.message}</span>:""}
            </div>
            <div>
                <label>cusine</label><br/>
                <select name="cusine" value={cusine} onChange={e=>setcusine(e.target.value)}>
                    <option value=""></option>
                    {cusines.map((cusineType,idx)=>(<option value={cusineType} key={idx}>{cusineType}</option>))}
                </select>
                {errors.cusine?<span className="error-text">{errors.cusine.message}</span>:""}
            </div>
            <div className="checkboxDiv">
                <label>Delivery Available?</label><br/>
                <input type="checkbox" checked={hasDelivery} value={hasDelivery} onChange = {(e)=>sethasDelivery(e.target.checked)}/>
                
            </div>
            <div>
                <label>hours</label><br/>
                <input type="text" value={hours} onChange = {(e)=>sethours(e.target.value)}/>
            </div>
            <div>
                <label>homepage</label><br/>
                <input type="text" value={homepage} onChange = {(e)=>sethomepage(e.target.value)}/>
            </div>
            <button className="button" type="submit">Add Restaurant</button></form></div>)
}
export default Create;