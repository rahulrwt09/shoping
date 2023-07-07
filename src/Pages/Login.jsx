import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../Redux/AuthReducer/action';
const Login = () => {

  
      const [email, setemail]= useState("");
      const [password,setpassword]= useState("")
    const dispatch = useDispatch();

      
      const handlelogin=()=>{
           let userdata={email,password};
       dispatch(login(userdata))
      }

      return (
    <div>
      <label>Email</label>
      <input type='text'
       value={email}
      onChange={(e)=>{
        setemail(e.target.value)
      }}/>

      <label>Password</label>
      <input type='text' 
      value={password}
        onChange={(e)=>{
        setpassword(e.target.value)
      }} />

      <button onClick={handlelogin()} >Login</button>
    </div>
  )
}

export default Login
