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

export const login= (userdata)=(dispatch)=>{
    dispatch(loginreqest())
    axios.post("https://reqres.in/api/login", usedata)
    .then((res)=>{
        console.log(res);
        dispatch(loginsuccess(res.data.token));
    })
    .catch((err)=>{
        dispatch(loginfailure());
    })

}