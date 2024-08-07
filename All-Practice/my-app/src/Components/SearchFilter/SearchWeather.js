import React, { useEffect, useState } from 'react'
import './SearchFilter.css'

export default function SearchWeather() {

    const[city, setCity] = useState()
    const[apiData,setApiData]=useState()

    const getdata = (event) => {
        
        setCity(event.target.value)
    }

    const getApiData = async () =>{

        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1ad9adff48d75fca7aaae709c1681931`)
        const actualData = await api.json();
        console.log(actualData.main);
        setApiData(actualData.main)

    }
    

    useEffect(()=>{
        getApiData(); 
    },[city])

  return (

    <div className='area'>
        
        <div className='inputarea'>

        <input type='text' placeholder='Write City Name' onChange={getdata} />

        </div>

        <div className='box'>


            {
                !apiData ? (
                    <>

                        <p className='box-heading'>Weather Info (In Celsius)</p>

                        <h1>Enter city</h1>
        
                        <div className='flexh2'><span className='maxtemp greencolor'>00</span><h3>Current Weather</h3> </div>
        
                        <div className='flex-row'>

                            <div className='flex1'><span className='maxtemp redcolor'>00 </span><p>max-temp </p> </div>
                            <div className='flex1'><span className='maxtemp bluecolor'>00 </span><p>min-temp </p> </div>

                        </div>

                    </>

                ) : (

                    <>

                        <p className='box-heading'>Weather Info (In Celsius)</p>

                        <h1>{city}</h1>
            
                        <div className='flexh2'><span className='maxtemp greencolor'>{apiData.temp} </span><h3>Current Weather</h3> </div>
            
                        <div className='flex-row'>

                            <div className='flex1'><span className='maxtemp redcolor'>{apiData.temp_max}</span><p>max-temp </p> </div>
                            <div className='flex1'><span className='maxtemp bluecolor'>{apiData.temp_min}</span><p>min-temp </p> </div>
                            

                        </div>

                    </>

                )
            }

            

        </div>

    </div>

  )
}
