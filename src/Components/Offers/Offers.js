import React from 'react';
import "./Offers.css";
import exclusive from "../Images/exclusive_image.png";

export default function Offers() {
  return (
    <div className='offers'>
        <div className='offers_left'>
            <h1>EXCLUSIVE<br></br>
            Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='offers_right'>
           
            <img src={exclusive} alt=''></img>

           

        </div>
    </div>
  )
}
