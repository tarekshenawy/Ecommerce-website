import React from 'react';
import './Breadcrum.css';
import breadcrum_icon from "../Images/breadcrum_arrow.png";

export default function Breadcrum(props) {
  return (
    <div className='breadcrum'>
    Home <img src={breadcrum_icon} alt=''></img> SHOP <img src={breadcrum_icon} alt=''></img> {props.category} <img src={breadcrum_icon} alt=''></img> {props.name}
</div>
  )
}
