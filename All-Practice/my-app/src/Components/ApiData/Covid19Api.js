import React, { useEffect, useState } from 'react'
import './Covid19Api.css'



export default function Covid19Api() {

    

   

   

   

    const[MyData,setMyData] = useState([])

    const getCovidData = async () =>{
      //  const response = await fetch('https://data.covid19india.org/data.json')
       const response = await fetch('https://data.covid19india.org/v4/min/data.min.json')
       const actualData = await response.json();
      console.log(actualData.GJ.total);
      setMyData(actualData.GJ.total)
    
  }

    useEffect(()=>{
      
      getCovidData();
      
    },[])

  return (
    <div>

        <h1>GUJARAT Covid-19 cases</h1>

        <div className='boxarea'>

            <div className='card Blueviolet'><h3>State</h3><p className='countryName'>Gujarat</p></div>
            <div className='card orange'><h3>Total Confirmed</h3> <p className='countryName'>{MyData.confirmed}</p></div>
            <div className='card red'><h3>Total Death</h3> <p className='countryName'>{MyData.deceased}</p></div>

          
        </div>
        
        <div className='boxarea'>

            <div className='card yellow'><h3>Total Recovered</h3> <p className='countryName'>{MyData.recovered}</p></div>
            <div className='card green'><h3>First Dose (vaccine)</h3> <p className='countryName'>{MyData.vaccinated1}</p></div>
            <div className='card brown'><h3>Second Dose (vaccine)</h3> <p className='countryName'>{MyData.vaccinated2}</p></div>

          
        </div>

       


    </div>
  )
}
