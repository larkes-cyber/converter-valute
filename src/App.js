import React, { useState,useEffect } from 'react';
import './App.css';
import GetCurrency from './service/get-currency';
const App=(props)=>{
  const [course,setCourse]=useState({});
  const [count,setCount]=useState(props.counter);
  function onRequest(){
      const Data=new GetCurrency();
      Data.getCurrencyCourse().then(data=>setCourse(data));
  }
  useEffect(()=>onRequest(),[])

  const setValute=(num)=>{
    setCount(count=>Math.floor(props.counter*num));
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  } 

  const setRAN=()=>{
    setCount(getRandomInt(-50,50));
  }

  const reset=()=>{
    setCount(0);
  }

    return (
      <div class="app">
        <div class="counter">{count}</div>
        <div class="controls">
          <button onClick={()=>setValute(course["USD"])}>USD</button>
          <button onClick={()=>setValute(course["EUR"])}>EUR</button>
          <button onClick={()=>setValute(course["UAH"])}>UAH</button>
          <button onClick={()=>setRAN()}>RAN</button>
          <button onClick={()=>reset()}>RESET</button>
        </div>
      </div>
    )
}

  
export default App;