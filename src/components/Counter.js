import React, {useMemo, useState} from 'react'

/**
 * useMemo hook is used for performance optimization (as well as useCallback hook)
 * in this special example, we will apply useMemo hook to tell react not to recompute isEven function which introduces some delay when unnecessary (i.e: changing the counterTwo state)
 * P.S: When you need to cach a function use the "useCallback" hook
 * P.S2: Whrn you need to cach the result of a function use the "useMemo" hook
 */
export default function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)
  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }
  const isEven = useMemo(() => {
    // introduce some delay
    let i =0
    while(i<2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count 1: {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count 2: {counterTwo}</button>
      </div>
    </div>
  )
}
