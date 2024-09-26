import React, { useContext } from 'react';
import { shopcontext } from '../Context/Context';
import Item from '../Components/Item/Item';
import './Css/Shopcategory.css';

export default function Shopcategory({banner,category}) {
  let {all_product} = useContext(shopcontext);

  return (
    <div className='shopcategory'>
      <img src={category==="men" ? banner :""} alt=''></img>
      <img src={category==="women" ? banner :""} alt=''></img>
      <img src={category==="kid" ? banner :""} alt=''></img>

      <div className='shopcategory-Index'>
            <p>Showing 1-12 out of 54</p>
            <p>Sort by </p>
        </div>

      <div className='shopcategory_products'>
        {all_product.map((el)=>{
          if(el.category===category){
            return(
              <Item image={el.image} name={el.name} 
              new_price={el.new_price}
              old_price ={el.old_price}
              id={el.id}
               />
  
            )
           

          }
       

        })}
      </div>
      


    </div>
  )
}
