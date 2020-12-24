import './App.css';
import React, { createContext } from 'react';
import ComponentC from './components/ComponentC';
export const userContext = createContext();
export const channelContext = createContext();

function App() {
  return (
    <div className='App'>
      <userContext.Provider value={'Ramzi'}>
        <channelContext.Provider value={'ZelfaCode'}>
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
