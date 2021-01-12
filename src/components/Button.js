import React from 'react'

export default React.memo(function Button({handleClick, children}) {
  console.log(`Rendering Button - ${children}`)
  return (
    <button onClick={handleClick}>Add {children}</button>
  )
})
