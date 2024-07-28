import { useState } from 'react'

import Array from './Component/Array'
import Product from './Component/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Array/>
      <Product/>
    </>
  )
}

export default App
