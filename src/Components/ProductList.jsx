import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../Redux/ProductReducer/action';
import ProductCard from './ProductCard';
import "./display.css";
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const dispatch= useDispatch();
  const [searchparams] = useSearchParams();
  const location= useLocation();
  const prodcuts = useSelector((store)=>{
     return store.productreducer.products;
  });
   
   let obj ={
    params:{
      
      gender:searchparams.getAll("category"),

    }
   }
  useEffect(()=>{
    dispatch(getproduct(obj));
  }, [location.search])
  

  return (
    <div className='container'>
    
       {prodcuts.length>0 && prodcuts.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
      })

      
      }  
    </div>
  ) 
}

export default ProductList
