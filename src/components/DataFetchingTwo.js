import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div>
        <h3>{post.title}</h3>
        <p style={{ textAlign: 'left', margin: '3rem' }}>{post.body}</p>
      </div>
    </div>
  );
}
