import { useState } from 'react'
import Gallery from './Component/Gallery'
// import GetImgUrl from './Component/GetImgUrl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery/>
    </>
  )
}

export default App
