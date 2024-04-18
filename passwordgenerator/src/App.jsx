import { useState,userCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [allowedNumber,setallowedNumber]=useState(false)
  const [allowedchar,setallowedChar]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator = userCallback(()=>{
    let pass=""
    let str=""
  },[length,allowedNumber,allowedchar,setPassword])
  return (
    <>
     <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
