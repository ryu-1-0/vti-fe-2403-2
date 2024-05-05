import React, { useState } from 'react'

const Lifecycle = (props) => {
  console.log('Mounting Lifecycle ...')
  const [counter, setCounter] = useState(0)

  return (
    <div>Lifecycle
      {props.counter}
      {/* <h2>{counter}</h2>
      <button onClick={() => { setCounter((preStae) => preStae + 1) }}>Update Counter</button> */}
    </div>
  )
}

export default Lifecycle