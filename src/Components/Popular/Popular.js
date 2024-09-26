import React from 'react';
import "./Popular.css";
import data from "../Images/data";
import Item from '../Item/Item';

export default function Popular() {
  return (
    <div className='popular'>
        {
            data.map((el)=>{
                return(
                    <Item image={el.image} name={el.name} 
                    new_price={el.new_price}
                    old_price ={el.old_price}
                    id={el.id}
                     />

                )
              
            })
        }


    </div>
  )
}
