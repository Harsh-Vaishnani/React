import { useState } from 'react'

import ToDo from './Components/ToDo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo/>
    </>
  )
}

export default App
