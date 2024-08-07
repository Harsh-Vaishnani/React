import React,{useState} from 'react'
import Hook from './Hook';
import '../Props_and_state/Header.css'

export default function FunctionalHeader2() {

  let curDate =  new Date();
  curDate = curDate.getHours();

  let greeting ='';
  const style = {};

  if(curDate>1 && curDate<12){
    greeting = 'Good Morning';
    style.color = 'aqua';
  }else if(curDate>=12 && curDate<18){
    greeting = 'Good Afternoon';
    style.color = 'orange';
  }else{
    greeting = 'Good Evening';
    style.color = 'skyblue';
  }
  


   const [data,setData]=useState(true)
   


  return (
    <>
    <div className='header'>

        {data ? <h1>Hello Renish!</h1> : null}
        <button onClick={()=>setData(false)}>Hide</button>
        <button onClick={()=>setData(true)}>Show</button>
        {/* <button onClick={()=>setData(!data)}>Toggle</button> */}

      

    </div>
       <div className='greeting'>
        <h3>Hello sir, <span style={style}> {greeting}</span> </h3>
      </div>

    <Hook/>

    </>
  )
}