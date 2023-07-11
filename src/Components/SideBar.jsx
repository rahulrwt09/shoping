import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { useStatStyles } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
const SideBar = () => {

  const [category, setcategory]= useState([]);

  const[searchparams, setsearchparams]=
    useSearchParams();

  const handelChange= (e)=>{
    let newcategory= [...category];
    let value= e.target.value;
    if((newcategory).includes(value)){
      newcategory.splice(newcategory.indexOf(value),1)

    }
    else{
      newcategory.push(value);
    }
   
    setcategory(newcategory);
    

  }
  useEffect(()=>{
    let params= {
      category:category,
    }
    setsearchparams(params)
  },[category])
  return (
    <div className='sidebar'>
      <h3>Filter by</h3>
      <div>
      <input type='checkbox' value="men" onChange={handelChange}/>
      <label>Men</label>
      </div>
      <div>
      <input type='checkbox' value="female" onChange={handelChange}/>
      <label>Women</label>
      </div>
      <div>
      <input type='checkbox' value="kid" onChange={handelChange}/>
      <label>Kid</label>
      </div>
    </div>
  )
}

export default SideBar
