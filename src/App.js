
import { useEffect } from 'react';
import './App.css';
import useCounterWithActions from "./CustomHook";
import useRandomCounterApi from './UseRandomCounterApi';

const Counter = (props) => {
  const counter = useCounterWithActions(props.counter)
 
  useEffect(()=>{
    counter.setCounterFromOutside(props.counter);
  },[props]);

  return (
    <div className="component">
      <div className="counter">{counter.counter}</div>
      <div className="controls">
        <button onClick={counter.incCounter}>INC</button>
        <button onClick={counter.decCounter}>DEC</button>
        <button onClick={counter.rndCounter}>RND</button>
        <button onClick={counter.resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const RndCounter = (props) => {
  const counter = useCounterWithActions(props.counter)

  useEffect(()=>{
    counter.setCounterFromOutside(props.counter);
  },[props]);

  return (
    <div className="component">
      <div className="counter">{counter.counter}</div>
      <div className="controls">
        <button onClick={counter.rndCounter}>RND</button>
        <button onClick={counter.resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App = () => {

  const fisrt = useRandomCounterApi(),
  second = useRandomCounterApi()

  return (
      <>
          <Counter counter={fisrt}/>
          <RndCounter counter={second}/>
      </>
  )
}

export default App;