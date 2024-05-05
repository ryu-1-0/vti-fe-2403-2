import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/CounterContext'

const Message = (props) => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: currentTheme == 'Light' ? 'white' : 'black',
      color: currentTheme == 'Dark' && 'white',
    }}>
      {props.children}
    </div >
  )
}

export default Message