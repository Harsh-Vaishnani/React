import React, { useState } from 'react'
import './SearchFilter.css'
import SearchWeather from './SearchWeather'

export default function SearchFilter() {

    const[imgData,setImgData]= useState()

    const serachData = (event) =>{
        console.log(event.target.value);
        setImgData(event.target.value)
    }

    // const img = `https://source.unsplash.com/?mango`
    // const img = `https://picsum.photos/200/300`
    const img = `https://source.unsplash.com/random/600x400?${imgData}`
    // const img = 'curl https://api.unsplash.com/photos/random/'

  return (
    <div className='section'>

    <div className='area'>

        <div className='inputarea'>

            <input type='text' placeholder='Write anything' onChange={serachData} />

        </div>

        {imgData ? <div className='imgbox'> <img src={img}/> </div> 
                 : <div className='imgbox'> <p>write something</p> </div>}

    </div>


        <SearchWeather/>
    </div>
  )
}
