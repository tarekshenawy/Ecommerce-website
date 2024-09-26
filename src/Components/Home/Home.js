import React from 'react';
import "./Home.css";
import hand_icon from "../Images/hand_icon.png";
import arrow_icon from "../Images/arrow.png";
import home_image from "../Images/homeimage.png";

export default function Home() {
  return (
    <div className='container'>
          <div className='home'>
        <div className='home_left'>
            <h2>You can feel fashion sence</h2>
            <p className='new'>new <img src={hand_icon} alt='' style={{width:"50px"}}></img></p>
            <p>Collections</p>
            <p>for Everyone</p>
            <button>New Collections <img src={arrow_icon} alt=''></img></button>
           
        </div>
        <div className='home_right'>
            <img src={home_image} alt=''></img>

        </div>
    </div>

    </div>
  
  )
}
