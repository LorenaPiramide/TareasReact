import { useState } from 'react'
import './App.css'
import TareasList from './components/TareasList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TareasList/>
    </>
  )
}

export default App
