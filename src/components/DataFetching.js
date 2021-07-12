//useReducer for data fetching
import React,{useEffect,useReducer} from 'react';
import axios from 'axios';


//useReducer(reducer,initialState)
//initialState equals to an object
const initialState = {
  loading : true,
  errors: '',
  posts : {}
}

//reducer function
const reducer = (state,action)=>{
 
}
function DataFetching(){

}
export default DataFetching;