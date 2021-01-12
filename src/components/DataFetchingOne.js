import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})
  
  useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts/3')
    .then(res => {
      setPost(res.data)
      setLoading(false)
      setError('')
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
      setPost({})})
    
  }, [])
  return (
    <div>
      {
      
          loading?<p>Loading...</p>:error?<p>{error}</p>:<p>{post.title}</p>
        }
      
    </div>
  )
}
