import React, { useState } from 'react'
import { ThemeContext } from '../../../context/CounterContext'
import Message from './Message'
const Home1 = () => {
  const [theme, setTheme] = useState('light')
  const Change = () => {
    setTheme()
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Message >Message from Grandparents: </Message>
        <button onClick={() => { setTheme('Light') }}>
          App Theme Light
        </button>
        <h3></h3>
        <button onClick={() => { setTheme('Dark') }}>
          App Theme Dark
        </button>
      </div>
    </ThemeContext.Provider>

  )
}

export default Home1