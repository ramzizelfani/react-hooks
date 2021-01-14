import React from 'react'
import useCounter from '../hooks/useCounter'

export default function CounterOne() {
  const [count, increment, decrement, reset] = useCounter()
  return (
    <div>
      <h2>Count - {count} </h2>
      <button onClick = {increment}>Incrment</button>
      <button onClick= {decrement}>Decrement</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}
