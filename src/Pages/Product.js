import React, { useContext } from 'react';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductImage from '../Components/ProductImage/ProductImage';
import { shopcontext } from '../Context/Context';
import { useParams } from 'react-router-dom';

export default function Product() {
    const{productId}=useParams();
    const{all_product}=useContext(shopcontext);
    let productvalue = all_product.find((el)=>el.id===Number(productId))
  return (
    <div>

<div  className='product_details'>
        <Breadcrum name={productvalue.name} category={productvalue.category}/>
        <ProductImage id={productvalue.id} image ={productvalue.image}  name={productvalue.name} category={productvalue.category} new_price={productvalue.new_price} old_price={productvalue.old_price}/>
        
       {/* <Related/> */}
    </div>
    </div>
  )
}
