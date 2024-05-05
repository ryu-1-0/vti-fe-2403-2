import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { CounterContext } from '../../../context/CounterContext'
const Home = (props) => {
  const [counter, setCounter] = useState(0)
  const Increment = () => {
    setCounter((pre) => pre + 1)
  }

  return (

    <CounterContext.Provider value={counter}>
      <div>
        <h2>Home component - demo context</h2>

        <Child1 />
        <button onClick={() => Increment()}>Increment Counter</button>

        <Child2 data={counter} />

      </div>
    </CounterContext.Provider>
  )
}

export default Home