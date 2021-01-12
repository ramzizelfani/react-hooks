import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

export default function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(5000)
  const ageClick = useCallback(() => setAge(age + 1), [age])
  const salaryClick = useCallback(() => setSalary(salary + 100), [salary])
  return (
    <div>
      <Title />
      <Count text='age' count= {age} />
      <Button handleClick = {ageClick} children = 'Age' />
      <Count text='salary' count= {salary} />
      <Button handleClick = {salaryClick} children = 'Salary' />
    </div>
  )
}
