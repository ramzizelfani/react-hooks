import React, {useState} from 'react'
import useDocumenttitle from '../hooks/useDocumenttitle'

export default function DocTitleTwo() {
  const [countTwo, setCountTwo] = useState(0)
  useDocumenttitle(countTwo)
  return (
    <div>
      <button onClick={() => setCountTwo(countTwo + 1)}>Count - {countTwo}</button>
    </div>
  )
}
