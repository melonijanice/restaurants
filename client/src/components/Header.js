import React from "react";
import { Link } from "@reach/router";
const Header =(props)=>{
return(
    <div className="header-links header">
        
        <Link to="/restaurants/new">Create Restaurant</Link>
        <Link to="/restaurants">Home</Link>
        </div>)
}
export default Header;