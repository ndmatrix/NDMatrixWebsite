import React from "react";
import logoimg from "../Images/image.png"
import "../CSS/Home.css"
const Home = () => {
    return (
        <div>
            <div className="logo">
         <img src={logoimg}/>
         </div>
         <h2 className="lctext">We are launching soon....!!</h2>
        </div>
    )
}
export default Home;