import React, { useEffect }  from 'react'
import { useState } from 'react';
import axios from 'axios';
import './ApiCalling.css'
import Covid19Api from '../ApiData/Covid19Api';



export default function ApiCalling() {

    const [number, setNumber] = useState('');
    const [name, setName] =useState()
    const [move, setMove] =useState()

    const handleChange = (event) => { 
        setNumber(event.target.value);
    }

    useEffect(() => {
        async function getData(){
           const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
           setName(api.data.name)
           setMove(api.data.moves.length)
           
        }

        getData();
    })

  return (

    <>
    <div className='height'>
    <div className='flex'>

        <input type='number' onChange={handleChange} value={number} min='1' max='100'/>

        <h2>You Choose {number} Number</h2>


    </div>

    <h1>Your Character is <span className='span'>{name}</span> </h1>
    <h1>You have <span className='span'>{move}</span> moves </h1>

</div>

    <Covid19Api/>

</>

  )
}
