import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Button, 
  Input,
  Radio, RadioGroup, HStack ,
  
} from '@chakra-ui/react'
import './Admin.css';
import { addproduct } from '../Redux/ProductReducer/action';
import { useDispatch } from 'react-redux';
import Navbar from '../Components/Navbar';

let initialstate= {
  image:"",
  brand:"",
  price:"",
  description:"",
  gender:"",
}


const Admin = () => {
  const dispatch= useDispatch()
  const [product, setproduct]= useState(initialstate);
  const handelsubmit= (e)=>{
    e.preventDefault();
    console.log(product);
    dispatch(addproduct(product));
  } 
 
 
const handelchange= (e)=>{

       const {name,value}= e.target;
      setproduct(prev=>{
           return {...prev, [name]:name==="price"? +value:value}
      })
    console.log(product)
}


  
      return (
      <>
       <Navbar/>
    <div className='Admin'>
       
    <form  onSubmit={(e)=>{
      handelsubmit(e);
     }} >


     <FormControl >
      <FormLabel placeholder='url'>Image Url</FormLabel>

      <Input type='url' 
      name='image' 
      value={product.image}   
      onChange={(e)=>handelchange(e)}

      />

      

     
     <FormLabel placeholder='Enter Brand'>Brand Name</FormLabel>
      <Input type='text' 
        
      name='brand' 
      value={product.brand}   
      onChange={(e)=>handelchange(e)} 
       />
   
      <FormLabel placeholder='Enter Price'>Price</FormLabel>
      <Input type='number'
       name='price' 
      value={product.price}   
      onChange={(e)=>handelchange(e)}

      />

      <FormLabel placeholder='Enter Description' 
      
       >Description</FormLabel>

      <Input type='text'
        name='description'   
        onChange={(e)=>handelchange(e)}
        value={product.description}

      />
      
      <FormLabel >Select Gender</FormLabel>
       <select name="gender"onChange={(e)=>handelchange(e)}>
       <option value="">Select gender</option>
        <option value="male">Male</option>

        <option value="female">Female</option>

        <option value="kid">Kid</option>
       </select>
      

      <Button  type='submit' colorScheme='blue'  m={4}   >Add</Button>
      </FormControl>
      </form>
    </div>
    </>
  )
}

export default Admin
