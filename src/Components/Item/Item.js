import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
export default function Item(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt=''></img></Link>
        <h3>{props.name}</h3>
        <div className='prices'>
            <p>{props.new_price}$</p>
            <p className='old'>{props.old_price}$</p>
        </div>

    </div>
  )
}
