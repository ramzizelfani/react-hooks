import React from 'react';
import { useState, useEffect } from 'react';
export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`Updating document title ${count} times`);
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} Times
      </button>
    </div>
  );
}
