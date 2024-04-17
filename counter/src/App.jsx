import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter,setCounter]=useState(5)

  //let counter =5;
  //used to update a variable everywhere in the code
  const addvalue = ()=> {
    //console.log("counter",counter);
    if(counter<20)
    {
      setCounter(counter+1)
    }
    
  }

  const removeValue = () =>{
    if(counter>0)
    {
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>react using javascript</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addvalue}
      >Increment</button>
      <br/>
      <button
      onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
