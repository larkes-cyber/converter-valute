import {Component,useState,useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Service from './Service';

const server = new Service();


const App = (props) => {
  
    const [counter,setCounter] = useState(props.default)

    const [coins,setCoins] = useState({
      usd:0,
      eur:0,
      uah:0
    })

    useEffect(()=>{
      server.getCurrencyCourse().then((props)=>{
        setCoins({
          usd:props.USD,
          eur:props.EUR,
          uah:props.UAH
        })
      })
    },[])

    function onChangeValue(i){
      setCounter(Math.ceil(props.default * i))
    }

    function onResetValue(){
        setCounter(0)
    }


    return (
        <div class="app">
          <div class="counter">{counter}</div>
          <div class="controls">
            <button onClick={()=> onChangeValue(coins.usd)}>USD</button>
            <button onClick={()=> onChangeValue(coins.eur)}>EUR</button>
            <button onClick={()=> onChangeValue(coins.uah)}>UAH</button>
            <button onClick={()=> onResetValue()}>RESET</button>
          </div>
        </div>
      )
  }

export default App;
