import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    </>
  )
}

export default App
