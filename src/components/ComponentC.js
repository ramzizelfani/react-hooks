import React from 'react';
import ComponentD from './ComponentD';
export default function ComponentC() {
  return (
    <div style={{ backgroundColor: 'Green' }}>
      Component C
      <ComponentD />
    </div>
  );
}
