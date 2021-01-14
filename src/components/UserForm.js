import React from 'react'
import useInput from '../hooks/useInput'

export default function UserForm() {
  const [firstName, bindFirstName, resetFirstName ] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name </label>
          <input type="text"
          {...bindFirstName} 
          />
        </div>
        <div>
          <label> First Name </label>
          <input type="text"
          {...bindLastName}
          />
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}
