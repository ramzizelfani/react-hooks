import React, {useContext} from 'react';
import {CountContext} from '../App' 
export default function ComponentF() {
  const countContext = useContext(CountContext)
  return <div style={{backgroundColor:'coral'}}>
    <h6>F</h6>
    <p>{countContext.countState}</p>
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    
    </div>;
}