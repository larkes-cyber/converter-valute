import React, { useState } from 'react';
import './App.css';
const App=(props)=>{
  const [count,setCount]=useState(props.counter);
  const setINC=(num)=>{
    setCount(count=>count+num);
  }
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  const setDEC=(num)=>{
    setCount(count=>count-num);
  }
  const setRND=()=>{
    setCount(getRandomInt(-50,50));
  }
  const reset=()=>{
    setCount(0);
  }
    return (
      <div class="app">
        <div class="counter">{count}</div>
        <div class="controls">
          <button onClick={()=>setINC(1)}>INC</button>
          <button onClick={()=>setDEC(1)}>DEC</button>
          <button onClick={()=>setRND()}>RND</button>
          <button onClick={()=>reset()}>RESET</button>
        </div>
      </div>
    )
}

  
export default App;