import React, { useState, useEffect } from 'react';

export default function HookCounterTwo() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('useEffect Called');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div>
      Hooks X - {coords.x} Y - {coords.y}
    </div>
  );
}
