import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../Redux/AuthReducer/action';
import "./login.css"

import {
  FormControl,
  FormLabel,
  Button, 
  Input,
  
  
} from '@chakra-ui/react'
import Navbar from '../Components/Navbar';
const Login = () => {

  
      const [email, setemail]= useState("");
      const [password,setpassword]= useState("")
    const dispatch = useDispatch();

      
      const handlelogin=()=>{
           let userdata={email,password};
       dispatch(login(userdata))
       
        
      }

      return (
        <>
        <Navbar/>
    <div className='login'>

      
     <FormControl >
     <FormLabel placeholder='Email'>Email</FormLabel>
      <Input type='text'
      placeholder='Enter Email'
       value={email}
      onChange={(e)=>{
        setemail(e.target.value)
       
      }}/>

<FormLabel placeholder='Password'>Password</FormLabel>
      <Input type='text'
      placeholder='Enter Password' 
      value={password}
        onChange={(e)=>{
        setpassword(e.target.value)
        
      }} />

      <Button onClick={handlelogin} m={4} bg="#00FFFF">Log in</Button>

      </FormControl>
    </div>

    </>
  )
}

export default Login
