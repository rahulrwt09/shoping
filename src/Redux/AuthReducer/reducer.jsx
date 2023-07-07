import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

const initialstate= {
 isAuth:false,
 token:"",
 isLoading:false,
 isError:false,
}
export const reducer= (state=initialstate, {type,payload})=>{
    switch(type){
       case LOGIN_REQUEST:
        return {...state,isLoading:true,isError:false}

       case LOGIN_FAILURE:
        return {...state,isLoading:false,isError:true}

       case LOGIN_SUCCESS:
        return {...state,isLoading:false,
        isError:false,isAuth:true,token:payload

        }

        default:
            return state;
    }

}