import React, { useContext } from 'react'
import { CounterContext } from '../../../context/CounterContext'
const Child2 = (props) => {

  const currentContext = useContext(CounterContext)
  console.log('currentContext', currentContext)
  return (
    <div>Child2
      {/* <h3>Counter: {props.data}</h3> */}
      <h3>Counter: {currentContext}</h3>
    </div>
  )
}

export default Child2