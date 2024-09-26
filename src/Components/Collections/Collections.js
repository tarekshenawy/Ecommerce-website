import React from 'react';
import './Collections.css';
import all_collections from "../Images/new_collections";
import Item from '../Item/Item';

export default function Collections() {
  return (
    <div className='collections'>
        {
            all_collections.map((el)=>{
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
