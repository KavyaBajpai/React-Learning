import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-semibold text-gray-800 bg-gray-400 mb-4 rounded-xl px-4 py-2'>Tailwind Test</h1>
      <Card name="abc" />
      <Card name="xyz"/>
     

    </>
  )
}

export default App


