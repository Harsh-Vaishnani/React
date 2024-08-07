
import React, { useContext } from 'react'
import {Firstname, Lastname} from './UseContext'

export default function AppB() {

    const fname = useContext(Firstname);
    const lname = useContext(Lastname);

  return (
    <div>
        
        <h1>Hello I'm {fname} {lname}</h1><p>This is the Exmaple of UseContext</p>
    </div>
  )
}
