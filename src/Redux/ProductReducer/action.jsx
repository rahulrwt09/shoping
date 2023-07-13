import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"
import axios from "axios"
export const getproductssuccess= (payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}

}

export const postproductssuccess= ()=>{
  return {type:POST_PRODUCT_SUCCESS}
}

export const productrequest= ()=>{
  return {type:PRODUCT_REQUEST}
}
export const productfailure= ()=>{
  return {type:PRODUCT_FAILURE}
}


export const addproduct =(payload)=>(disptach)=>{
     disptach(productrequest());
     axios.post("http://localhost:8080/products", payload)
     .then(
       (res)=>{disptach(postproductssuccess())}
     )
     .catch((err)=>{disptach(productfailure())})
}

export const getproduct = (obj)=>(dispatch)=>{
   dispatch(productrequest());
   axios.get("http://localhost:8080/products",obj)
   .then(
    (res)=>
    {
      dispatch(getproductssuccess(res.data))
    })
   .catch(
    ()=>{
      dispatch(productfailure())
    }
   )
}