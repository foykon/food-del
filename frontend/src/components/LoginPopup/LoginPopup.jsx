import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = (setShowLogin) => {
    const[currState,SetCurrState] = useState("Login")
  
    return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin.setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="text" placeholder='Your e-mail' required />
                <input type="password" placeholder='Password' required/>
                
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the term of use & privacy policy.</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=> SetCurrState("Sign up")}>Click Here</span></p>:
            <p>Already have an account? <span onClick={()=>SetCurrState("Login")}>Login Here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup