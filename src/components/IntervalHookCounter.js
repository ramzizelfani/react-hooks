import React, { useState, useEffect } from 'react';

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); // could be also [count] to keep track of the count value, always think about dependencies
  return <div>{count}</div>;
}
