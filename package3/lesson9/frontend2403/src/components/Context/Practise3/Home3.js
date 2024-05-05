import React, { useState } from 'react'
import { InfoPageContext } from '../../../context/InforContext'
import FormResult from './FormResult'

const Home3 = () => {
  const [user, setUser] = useState({
    firstName: 'example',
    lastName: 'example',
    age: 'example',
    address: 'example'
  })
  // const { firstName, lastName, age, address } = useState('')
  return (
    <InfoPageContext.Provider value={user}>
      <div>
        <div>
          <label>firstName:</label>
          <input type="text" value={user.firstName} onChange={(e) => setUser({
            ...user,
            firstName: e.target.value,
          })} />
        </div>
        <div>
          <label>lastName:</label>
          <input type="text" value={user.lastName} onChange={(e) => setUser({
            ...user,
            lastName: e.target.value,
          })} />
        </div>
        <div>
          <label>age:</label>
          <input type="text" value={user.age} onChange={(e) => setUser({
            ...user,
            age: e.target.value,
          })} />
        </div>
        <div>
          <label>address:</label>
          <input type="text" value={user.address} onChange={(e) => setUser({
            ...user,
            address: e.target.value,
          })} />
        </div>
        <button onClick={() => { setUser(...user) }}>
          Submit
        </button>
        <FormResult />
      </div>
    </InfoPageContext.Provider>

  )
}

export default Home3