import React, { useEffect, useState } from 'react'
import Component2 from '../Component2/Component2'

const Component1 = () => {
  const BASE_API_USER = 'http://localhost:3001/users'
  const [data, setData] = useState(null)
  const getUsers = async () => {
    try {
      const response = await fetch(BASE_API_USER);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }

  }
  useEffect(() => {
    getUsers()

  }, [])
  return (
    <div>Component1
      <Component2 data={data} />
    </div>
  )
}

export default Component1