import React, { useState } from 'react';
import HookCounterTwo from './HookCounterTwo';

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookCounterTwo />}
    </div>
  );
}
