/**
 * The useRef can be also used to store any immutable value
 * This immutable value could be consumed through the different 
 * life cycles of a functional component
 * Mutable (a.k.a array and object) vs Immutable (a.k.a Number and String): If an item is mutable, modifying the copy also modifies the original. If it’s immutable, modifying the copy does not affect the original.
 */

import React, {useState, useEffect, useRef} from 'react'

export default function HookTimer() {
  const [counter, setCounter] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1)
    }, 1000)
      return () => {
      clearInterval(intervalRef.current)
      }
  }, [])
  return (
    <div>
     Hook Timer - {counter} 
    <button onClick={() => clearInterval(intervalRef.current)}> Clear Hook Interval</button>
    </div>
  )
}
