import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  // let counter=15
  const addvalue=()=>{
    // console.log("Clicked",counter);
    if(counter==20){
      setCount(counter=20);
    }else{
      setCount(counter+1);
    }
    // counter=counter+1;
    // setCount(counter);
  }
  const removevalue=()=>{
    if(counter>0){
     setCount(counter-1);
    }else{
      setCount(counter=0);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}
    >Remove value</button>
    </>
  )
}

export default App
