import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { useStatStyles } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
const SideBar = () => {
  const[searchparams, setsearchparams]=
    useSearchParams();
 const initialstate =searchparams.getAll("category");
  const [category, setcategory]= useState(initialstate|| []);

  
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
      <input type='checkbox'checked={category.includes("male")} value="male" onChange={handelChange}/>
      <label>Men</label>
      </div>

      <div>
      <input type='checkbox' checked={category.includes("female")}  value="female" onChange={handelChange}/>
      <label>Women</label>
      </div>
      <div>

      <input type='checkbox' checked={category.includes("kid")}  
       value="kid" onChange={handelChange}/>
      <label>Kid</label>
      </div>
    </div> 
  )
}

export default SideBar
