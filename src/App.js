import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  

  const [count, setCount] = useState(0)
  const [backOne, setBackCount] = useState(0)
  const updateCount = () => {
    setCount(count + 1)

  
  }

  

  const backCount = () => {
    setBackCount(backOne - 1)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={updateCount}>Click For One More</button>
          <button onClick={refreshPage}>Click To Reload</button>
          <button onClick={backCount}>Click For One Less</button>
        </p>
        <h4>You've Clicked {count} times!</h4>
        <h4>You've Subtracted {backOne} times!</h4>
          
        
      </header>
    </div>
  );
}

export default App;
