import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../Redux/ProductReducer/action';
import ProductCard from './ProductCard';


const ProductList = () => {
  const dispatch= useDispatch();
  const prodcuts = useSelector((store)=>{
     return store.productreducer.products;
  });
  useEffect(()=>{
    dispatch(getproduct);
  }, [])
  console.log(prodcuts)
  return (
    <div>
       {/* {prodcuts.length>0 &&
       prodcuts.map((el)=>{
        return <ProductCard key={el.id} product={el}/>

       })} */}
       {prodcuts.length>0 && prodcuts.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
      })

      
      }  
    </div>
  ) 
}

export default ProductList
