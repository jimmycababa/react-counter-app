import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [backOne, setBackCount] = useState(0)
  const [counter, setCounter] = useState(0)

 useEffect(() => {
   const interval = setInterval(() => {
     console.log("this will run every second")
     setCounter(counter => counter + 1)
   }, 1000)
   return () => clearInterval(interval)
 }, [])

  const updateCount = () => {
    setCount(count + 1)
  }

  const backCount = () => {
    setBackCount(backOne - 1)
  }

  const resetPage = () => {
    setCount(0);
    setBackCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={updateCount}>Click For One More</button>
          <button onClick={resetPage}>Click To Restart</button>
          <button onClick={backCount}>Click For One Less</button>
        </p>
        <h4>You've Clicked {count} times!</h4>
        <h4>You've Subtracted {backOne} times!</h4>
        <h3>I am counting on you! {counter}</h3>
          
        
      </header>
    </div>
  );
}

export default App;
