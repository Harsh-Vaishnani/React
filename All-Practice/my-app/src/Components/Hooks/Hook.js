import React, { useState } from 'react'
import '../Props_and_state/Header.css'
import Button from '@mui/material/Button';

export default function Hook() {

   

    const [num,setNum] = useState(0)
    let currentTime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(currentTime)

    const IncreaseNum = () =>{
       setNum(num+1)
    }
    const DecreaseNum = () =>{
        if(num>0){
            setNum(num-1)
        }else{
            setNum(0)
        }
        
    }


    const ShowTime = () =>{
        let currentTime = new Date().toLocaleTimeString();
        setTime(currentTime)
    }

   

    let NewTime = new Date().toLocaleTimeString();
    const [newTime,setNewTime] = useState(NewTime)
    
    const UpdateTime = () =>{
        let NewTime = new Date().toLocaleTimeString();
        setNewTime(NewTime)
      
    }

    setInterval(UpdateTime)
    let black = "#000000"

    const [color,setColor]=useState(black)

    const RedColor = () =>{
        let newColor = '#FF0000'    
        setColor(newColor)
    }

  return (
    <div className='hook'>
        
        <h2>Use of Hook and material Ui</h2>
        <h1>{num}</h1>
        <Button variant="contained" onClick={IncreaseNum}>Increase</Button>
        <Button variant="contained" onClick={DecreaseNum}>Decrease</Button>

        <h1 >{time}</h1>
        <Button variant="contained" onClick={ShowTime}>Current time</Button>
        
        <h1 style={{color : color}}> {newTime}</h1>
        <Button variant="contained" onClick={RedColor} >click</Button>
        

       
        
        
        </div>
  )
}
