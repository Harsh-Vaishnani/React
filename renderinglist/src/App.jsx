import { useState } from 'react'

import Array from './Component/Array'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Array/>
    </>
  )
}

export default App
