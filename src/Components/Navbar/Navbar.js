import React, { useContext, useState } from 'react';
import "./Navbar.css";
import nav_logo from "../Images/shopping-bag.png";
import cart_icon from "../Images/cart_icon.png";
import { Link } from 'react-router-dom';
import { shopcontext } from '../../Context/Context';
import down_arrow from"../Images/down-arrow.png";


export default function Navbar() {
    const[state,setState]=useState(0);
    const[showlist,setShowlist]=useState(false);
    const{getcartcount}=useContext(shopcontext);

  
  return (
    <nav>
        <div className='nav_left' >
            <img src={nav_logo} style={{width:"50px"}} alt=''></img>
            <Link to="/"><h2>Clothing Store</h2></Link>

        </div>
        <div className='arrow_down'>
            <img src={down_arrow} alt='' width="40px"  onClick={()=>(setShowlist(!showlist))}></img>
        </div>
        <ul className={showlist ? "show":"hide"}>
            <li onClick={()=>setState(0)}><Link to="/" >Home </Link>{state===0 ? <hr></hr>:""} </li>
            <li onClick={()=>setState(1)}><Link to="/Men">Men</Link> {state ===1 ? <hr></hr>:""}</li>
            <li onClick={()=>setState(2)}><Link to="/women" >Women</Link> {state ===2 ? <hr></hr>:""}</li>
            <li onClick={()=>setState(3)}><Link to="/kids" >Kids</Link> {state ===3 ? <hr></hr>:""}</li>
        </ul>
        <div className='nav_end'>
        <Link to="/login"><button>Login</button></Link>
            <div className='cartdetails'>
            <Link to="/Cart"><img src={cart_icon} alt=''></img></Link> 
            <p className='cartcount'>{getcartcount()}</p>
            </div>
          
        </div>

    </nav>
  )
}
