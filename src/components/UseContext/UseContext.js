import React, { useState } from 'react'
import UserContext from './UserContext'
import Component1 from './Component1'


const UseContext = () => {
    const [name,setName] = useState('Pradeep');
  return (
      <>
          <div>UseContext</div>
      <UserContext.Provider value={name}>
        <Component1 />
      </UserContext.Provider>
      </>
  )
}

export default UseContext