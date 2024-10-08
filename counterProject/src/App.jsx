import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15)
  //let counter=15
  const add= () => {
    //counter=counter+1 
    //if we console log the value of counter, the value changes accordingly but:
    //this code doesn't update the UI. the value of the counter remains 5 only.
    //this is because UI can be updated in react only with the help of HOOKS.

    setCounter(counter+1)
  }

  const remove= () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={add}>Add Value</button>
      <br />
      <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App


//INTERVIEW QUESTION
//if we increase the number of set counter statements, what happens?
   // const add= () =>{
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1) }

//what will be the value of counter after add function runs?
//  it will not be 19 because of useState hook.
//  useState hook uses the fibre diffing algorithm and it sends all the work to be executed in batches.
//  hence all the statements of the setCounter type are considered and transfered as one.
//  hence value updates only once. 

//to update the value 4 times, we use prevCounter call back.
//this callback returns the value of the previously updated value. 
//when we run setCounter using this callback method, one statement runs first and then the next one follows.
//hence batching is avoided.
