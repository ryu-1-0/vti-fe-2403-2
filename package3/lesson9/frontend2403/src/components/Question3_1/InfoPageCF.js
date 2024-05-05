import React, { useState } from 'react'
import Fahrenheit from './Fahrenheit'
import Celsius from './Celsius'

const InfoPageCF = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('')
  const onChangeCelsius = (value) => {

    // setFahrenheit((value - 32) * 5 / 9)
    setCelsius(value);
    setFahrenheit((value * 9 / 5) + 32)

  }
  const onChangeFahrenheit = (value) => {
    setFahrenheit(value);
    setCelsius((value - 32) * 5 / 9)
    // setCelsius((value * 9 / 5) + 32)
  }
  return (
    <div>
      <Celsius data={celsius} onChange={onChangeCelsius} />
      <Fahrenheit data={fahrenheit} onChange={onChangeFahrenheit} />
    </div>
  )
}

export default InfoPageCF