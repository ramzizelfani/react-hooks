import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, [posts]);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
