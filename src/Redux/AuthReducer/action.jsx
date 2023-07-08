import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

const loginreqest= ()=>{
    return {type:LOGIN_REQUEST}
}
const loginsuccess= (payload)=>{
     return {type:LOGIN_SUCCESS, payload}
}
const loginfailure= ()=>{
    return {type:LOGIN_FAILURE}


}

export const login= (userdata)=>(dispatch)=>{
    dispatch(loginreqest())
    axios.post("https://reqres.in/api/login", userdata)
    .then((res)=>{
        
        dispatch(loginsuccess(res.data.token));
        console.log(res);
    })
    .catch((err)=>{
        dispatch(loginfailure());
    })

}