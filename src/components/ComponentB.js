import React from 'react';
import ComponentD from './ComponentD';

export default function ComponentB() {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      B
      <ComponentD />
    </div>
  );
}
