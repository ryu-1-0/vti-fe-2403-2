import React, { useContext } from 'react'
import { InfoPageContext } from '../../../context/InforContext'
const FormResult = () => {
  const currentContext = useContext(InfoPageContext)
  console.log('first InfoPageContext', currentContext)
  return (
    <div>
      <div>
        <label>firstName:</label>{currentContext.firstName}
      </div>
      <div>
        <label>lastName:</label>{currentContext.lastName}
      </div>
      <div>
        <label>age:</label>{currentContext.age}
      </div>
      <div>
        <label>address:</label>{currentContext.address}
      </div>

    </div>
  )
}

export default FormResult