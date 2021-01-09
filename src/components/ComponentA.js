import React, {useContext} from 'react';
import {CountContext} from '../App'

export default function ComponentA() {
  const countContext = useContext(CountContext)
  return <div style={{ backgroundColor: 'green' }}>
    <h6>A</h6>
    <p>{countContext.countState}</p>
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>;
}
