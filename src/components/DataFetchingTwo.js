import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, [posts]);
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <ul>
        <li>{post.title}</li>
        <li>{post.body}</li>
      </ul>
    </div>
  );
}
