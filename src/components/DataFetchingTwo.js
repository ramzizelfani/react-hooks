import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
  post: {},
  loading: true,
  error: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        error: '',
        loading: false,
        post: action.payload
      }
      
    case 'FETCH_ERROR':
      return {
        post: {},
        loading: false,
        error: action.payload
      }
    default:
      return initialState;
  }
}
export default function DataFetchingTwo() {

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/10')
    .then(res => {
      dispatch({type: 'FETCH_SUCCESS', payload: res.data});
    })
    .catch( err => dispatch({type: 'FETCH_ERROR', payload: err.message}))
  }, [])
  
  return (
    <div>
      {
        state.loading ? <div>Loading...</div> : state.error ? <div>{state.error}</div> : <div>
          <h6>{state.post.title} </h6>
          <p>{state.post.body}</p>
          </div>
      }
    </div>
  )
}
