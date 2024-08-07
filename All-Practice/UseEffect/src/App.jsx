import { useState } from 'react'
import MyCounter from './Component/MyCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyCounter/>
    </>
  )
}

export default App
