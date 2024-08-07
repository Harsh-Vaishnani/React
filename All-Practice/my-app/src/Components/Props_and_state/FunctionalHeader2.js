import React,{useEffect, useState} from 'react'
import './Header.css'

export default function FunctionalHeader2() {

    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    const [width, setWidth]=useState(window.screen.width)
    function getData(val){
      setData(val.target.value)
      setPrint(false)
    }

    const changeWidth = () =>{
      setWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize', changeWidth)

      return ()=> {
        window.removeEventListener('resize', changeWidth)
      }
    })

  return (
    <div>

        <div className='functionalheader2'>

            <h1>Type here for print</h1>
            <input type="text" onChange={getData}/>
            <button onClick={() => setPrint(true)}>Print</button>

            { print? <p>{data}</p>:null }

            
            <h1> my Device width</h1>
            <h2>{width}</h2>

        </div>

    </div>
  )
}
