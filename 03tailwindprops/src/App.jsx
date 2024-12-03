import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from '.comp/Card.jsx'


function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"Akshat",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
    
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel="Chaiaurcode" sameObj={myobj}></Card>
      
    </>
  )
}

export default App