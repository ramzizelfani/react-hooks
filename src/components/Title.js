import React from 'react'

export default React.memo(function Title() {
  console.log('Rendering Title Component')

  return (
    <div>
      The useCallback Hook
    </div>
  )
})
