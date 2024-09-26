import React, { useContext } from 'react';
import './ProductImage.css';
import start_icon from "../Images/star_icon.png";
import dull_icon from "../Images/star_dull_icon.png";
import { shopcontext } from '../../Context/Context';
export default function ProductImage(props) {
   const{Addtocart}=useContext(shopcontext);


  return (
    <div className='prodcut_container'>
     
    <div className='product_left'>
               <div className='small_image'>
                   <img src={props.image} alt='' width="120px"></img>
                   <img src={props.image} alt='' width="120px"></img>
                   <img src={props.image} alt='' width="120px"></img>
               </div>

               <div className='large_image'>
                   <img src={props.image} alt=''></img>

               </div>
       </div>  

<div className='product_right'>
<h2>{props.name}</h2>
<div className='star_icon'>
   <img src={start_icon} alt=''></img>
   <img src={start_icon} alt=''></img>
   <img src={start_icon} alt=''></img>
   <img src={start_icon} alt=''></img>
   <img src={dull_icon} alt=''></img>
   <p>(122)</p>

</div>
<div className='prices'>
   <p>{props.new_price}</p>
   <p className='old_price'>{props.old_price}</p>
</div>
<div className='description'>
   <p>a garment for the upper part of the body usually with a collar, sleeves, a front opening, and a tail long enough to be tucked inside pants
   </p>
</div>
<div className='sizes'>
   <p>Select Size</p>
   <div className='size_icon'>
           <div >S</div>
           <div>M</div>
           <div>L</div>
           <div >XL</div>
           <div>XXL</div>

   </div>
   
</div>
<button onClick={()=>Addtocart(props.id)}>Add To Cart</button>
<div className='category'> category : <span>{props.category} ,T-shirt crop top</span></div>
<div className='tags'> Tags :<span> {props.category},T-shirt crop top</span></div>

</div>

</div>
)
  
}
