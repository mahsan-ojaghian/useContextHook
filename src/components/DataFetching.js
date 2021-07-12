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
  
 switch(action.type){
// .then()
case 'FETCH_SUCCESSFUL' :
  return {
    loading : false,
    posts : action.payload,
    error : ''
  }
  // .catch()
case 'FETCH_ERROR' :
return {
  loading : false,
  posts : {},
  error : 'something went wrong'
}
default :
return state
 }
}
function DataFetching(){
const [state,dispatch] = useReducer(reducer,initialState);

//useEffect()
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => dispatch({type : 'FETCH_SUCCESSFUL',payload : response.data}))
.catch(error => dispatch({type : 'FETCH_ERROR'}))
},[])


//JSX
return (
  <div>
{state.loading ?  'loading' : state.posts.title}
{state.error ? state.error : null}
  </div>
)
}
export default DataFetching;