import {useState} from 'react';

function useCounterWithActions(init){
    const [counter,setCounter] = useState(init);

    const setCounterFromOutside = num => setCounter(num);

    const incCounter = () => {
        if (counter < 50) {
          setCounter(counter => counter + 1)
        }
      }
      const decCounter = () => {
        if (counter > -50) {
          setCounter(counter => counter - 1)
        }
      }

      const rndCounter = () => {
        setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
      }
    
      const resetCounter = () => {
        setCounter(init)
      }

      return {counter, incCounter, decCounter, rndCounter, resetCounter, setCounterFromOutside}
}

export default useCounterWithActions;