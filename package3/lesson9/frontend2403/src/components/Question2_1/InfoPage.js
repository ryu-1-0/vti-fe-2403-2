import React, { useState } from 'react'
import ResultComponent from './ResultComponent'
import FormComponent from './FormComponent'

const InfoPage = () => {
  const [info, setInfo] = useState('')
  const onChange = (value) => {
    setInfo(value)
  }
  return (
    <div>
      <FormComponent handleClick={onChange} />
      <ResultComponent data={info} />
    </div>
  )
}

export default InfoPage