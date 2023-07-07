import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as product} from "./ProductReducer/reducer";
import {reducer as auth} from "./AuthReducer/reducer";
import thunk  from "redux-thunk"

const rootreducer= combineReducers(
    {
     product,
     auth,
    });

 export const store= legacy_createStore(rootreducer, applyMiddleware(thunk));;   