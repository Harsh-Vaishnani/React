import React, { createContext } from 'react'
import AppA from './AppA'

const Firstname = createContext();
const Lastname = createContext();

const UseContext = () => {

   

  return (
    <div>

        <Firstname.Provider value={'Renish'}>
            
            <Lastname.Provider value={'Gajera'}>

                 <AppA/>

            </Lastname.Provider>
            
        </Firstname.Provider>
           

    </div>
  )
}
export default UseContext;
export { Firstname, Lastname };