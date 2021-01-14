import React, {useState} from 'react'
import useDocumenttitle from '../hooks/useDocumenttitle'

export default function DocTitleOne() {
  const [countOne, setCountOne] = useState(0)
  useDocumenttitle(countOne)
  return (
    <div>
      <button onClick={() => setCountOne(countOne + 1)}>Count - {countOne}</button>
    </div>
  )
}
