import React from 'react'
import {WrapperMale, WrapperChild, WrapperFemale} from './Person'

export const PersonaContext = React.createContext({color : 'light'});

function Dashboard() {
  return (
    <PersonaContext.Provider value={{color: 'light'}}>
      <div>
          <WrapperMale alias="aditya"/> 
          <WrapperFemale alias="nikita"/>
          <WrapperChild alias="ishita"/>   
      </div>
    </PersonaContext.Provider>
  )
}

export default Dashboard