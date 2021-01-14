import React from 'react'
import useCounter from '../hooks/useCounter'
export default function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(3, 5)
  
  return (
    <div>
      <h2>Count = {count} </h2>
      <button onClick = {increment}>Incrment</button>
      <button onClick= {decrement}>Decrement</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}
