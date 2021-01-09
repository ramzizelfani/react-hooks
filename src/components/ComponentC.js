import React from 'react';
import ComponentE from './ComponentE';

export default function ComponentC() {
  return (
    <div style={{backgroundColor: 'cyan'}}>
      C
      <ComponentE />
    </div>
  );
}
