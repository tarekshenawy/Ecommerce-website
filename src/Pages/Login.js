import React from 'react';
import "./Css/Login.css";

export default function Login() {
  return (
    <div className='login'>
            <div className='login_details'>
            <h2>Sign UP</h2>

            <input type='text' placeholder='enter user name'></input>
            <input type='email' placeholder='enter your email'></input>
            <input type='password' placeholder='enter your password'></input>

            <button>Continue</button>

            <p>Already have an account ? <span>Login here</span></p>
            <div className='terms'>

              <input type='checkbox'></input>
              <p>By Continuing i agree to the terms of use & privacy policy</p>
            </div>

      </div>
    
     
    </div>
  )
}
