import React, {useContext} from 'react'
import UserContext from './UserContext'

const Component2 = () => {
    const user = useContext(UserContext);

  return (
    <p>{user}</p>
  )
}

export default Component2