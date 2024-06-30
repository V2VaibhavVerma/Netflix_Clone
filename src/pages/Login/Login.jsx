import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

//Whatever will be the text saved in signState, it will appear by clicking on the button
// Don't forget curly braces with signState 

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>   
        
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Username'/>:<></>}
          
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>{signState}</button>
          <div className="font-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="font-switch">
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up now</span></p>:<p>Already have account? <span  onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
