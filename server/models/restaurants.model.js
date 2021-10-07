const mongoose=require("mongoose");
const RestaurantSchema=mongoose.Schema({
    name: {
        type:String,
    required:[true, "A restaurant name is required"],
    minlength:[5, "A restaurant name must be atleast 5 characters long"]
    },
    address:{
        type:String,
        required:[true, "A restaurant address is required"],
        minlength:[10, "A restaurant address must be atleast 10 characters"]
    },
    phone:
    {
        type:String,
        required:[true,"A restaurant phone number is required"],
        minlength:[10,"A restaurant address must be atleast 10 characters"]
    },
    cusine:{
        type:String,
        required:[true, "Cusine type is required"],
        //enumeration will allow us to limit answers to specific strings
        enum:["Bar","Burgers","Cafe","Chinese","Coffee Shop","Fine Dining","Ice Cream","Italian","Mexican","Pizza","Sandwiches","SeaFood","Steakhouse","Thai"]
    },
hasDelivery:{
type:Boolean,
default:false,
},
hours:
{
    type:String
},
homepage:
{
    type:String
}

},{timestamps: true})

module.exports = mongoose.model('Restaurant', RestaurantSchema);