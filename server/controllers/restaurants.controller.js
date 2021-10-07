
const { request } = require('express');
const Restaurant = require('../models/restaurants.model'); 
module.exports.getAll=(request,response)=>
{
    Restaurant.find({})
            .then((restaurants)=>{
                console.log("Inside get all");
                console.log(restaurants)
                response.json(restaurants);

            })
            .catch(err =>response.json(err));
}
module.exports.create=(request,response)=>
{
    Restaurant.create(request.body)
    .then(restaurant=>{
        console.log("Sucess API");
        response.json(restaurant)}
    )
    .catch(err=>{
        response.status(400).json(err)
        console.log("Error adding to DB at API");
        response.json(err)})
}
module.exports.getOne=(request,response)=>
{
    Restaurant.findById({_id:request.params.id})
            .then((restaurants)=>{
                console.log("Inside get One");
                console.log(restaurants)
                response.json(restaurants);

            })
            .catch(err =>
        response.json(err));
}

module.exports.update=(request,response)=>
{
    Restaurant.findByIdAndUpdate(request.params.id,request.body,{new:true,runValidators:true}//return updated objects and run the validators that were used for update
        
        )
    .then(updatedrestaurant=>response.json(updatedrestaurant))
    .catch(err=>{
        response.status(400).json(err)
        console.log("Error adding to DB at API");
        response.json(err)})
}

module.exports.delete=(request,response)=>
{
    Restaurant.findByIdAndDelete(request.params.id)
    .then(deletedrestaurant=>response.json(deletedrestaurant))
    .catch(err=>response.json(err))
}