import React, { useContext } from 'react';
import './Cartitems.css';
import cartcross from "../Images/cart_cross_icon.png";
import { shopcontext } from '../../Context/Context';

export default function Cartitems() {
    const{removetocart,cartitem,all_product,gettotal}=useContext(shopcontext);
    console.log(gettotal())
  return (
    <div>
            <div className='cart_container'>

<div className='cart_titles'>
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>

<hr></hr>

                   {
                    all_product.map((el)=>{
                        if(cartitem[el.id]>0){
                            return(
                                                <div className='item_details'>
                                                <img src={el.image} alt='' width="60px"></img>
                                            <p className='cart_name'>{el.name}</p>
                                            <p>{el.new_price}</p>
                                            <p>{cartitem[el.id]}</p>
                                        <p>{cartitem[el.id]*el.new_price}</p>
                                        <img src={cartcross}  alt='' className='cross' onClick={()=>removetocart(el.id)}  ></img>

                                </div>

                            )
                        }
                    })
                   }
                 
                    
                
                
                


  
  
    <div className='cart_bottom'>
     
        <div className='cart_total'>

        <h2>Cart Totals</h2>

                    <div className='subtotal'>
                        <p>Substotal</p>
                        <p>${gettotal()}</p>
                    </div>

                    <hr></hr>
                    <div className='shipping'>
                        <p>shipping fee</p>
                        <p>free</p>
                    </div>

                    <hr></hr>
                    <div className='total'>
                        <p>Total</p>
                        <p>${gettotal()}</p>
                    </div>

                    <hr></hr>
                    <button>Processed To Checkout</button>
        </div>

        <div className='promocode'>
            <p>if you have a promocode . enter it here</p>
            <div className='promo_input'>
                <input type='text' placeholder='Enter promocode'></input>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </div>
    
  

    
    


</div>
    </div>
  )
}
