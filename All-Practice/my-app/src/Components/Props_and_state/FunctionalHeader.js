import React from 'react'
import {useState} from 'react'
import './FunctionalHeader.css'

export default function FunctionalHeader(props) {

  const [data,setData]=useState({name:'Renish',age:22})

  function namechangeupper(){
        setData({name:'RENISH',age:22})
  }

  function namechangelower(){
        setData({name:'renish',age:22})
  }

 
  return (
    <div className='functionalheader'> 
        {/* <div> <h1>My Name is {props.name} and i'm {props.age} years old</h1></div> exmaple of props in functional component */}

        <div> <h1>My Name is {data.name} and i'm {data.age} years old</h1></div> {/*exmaple of state in functional component*/}
        <button onClick={namechangeupper}>UPPERCASE</button>
        <button onClick={namechangelower}>lOWERCASE</button>

        
    </div>
  )
}
