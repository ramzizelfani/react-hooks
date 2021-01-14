import React, {useState} from 'react'
import './App.css';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div className='App'>
      <ClassTimer />
      <button onClick = {() => setToggle(!toggle)}>Set Toggle</button>
      {toggle ? <HookTimer /> : 'Timer unmouted'}
    </div>
  );
}

export default App;
