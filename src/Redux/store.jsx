import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as productreducer} from "./ProductReducer/reducer";
import {reducer as authreducer} from "./AuthReducer/reducer";
import thunk  from "redux-thunk"

const rootreducer= combineReducers(
    {
     productreducer,
     authreducer,
    });

 export const store= legacy_createStore(rootreducer, applyMiddleware(thunk));   