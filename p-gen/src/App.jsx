import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
const [length,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState('')

const passwordRef=useRef(null)


const passwordGenerator=useCallback(()=>{
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let pass=""
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="~!@#$%^&*()"

  for(let i=1;i<=length;i++)
  {
      let char=Math.floor(Math.random() * str.length + 1)
      pass +=str.charAt(char)
      setPassword(pass)
  }
  
  
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-600 text-center'>
         Password generator
          <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
            <input type="text" 
            value={password}
            className='w-full py-1 px-3 outline-none'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipBoard}
            className='flex flex-wrap bg-blue-500 px-2 py-1 outline-none text-white
            hover:bg-blue-300'>copy</button>
          </div>
          <div className='flex flex-wrap space-x-6 text-sm '>
            <div className='flex items-center gap-x-1'>
              <input type="range" 
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label> Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
               />
               <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
               />
               <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
