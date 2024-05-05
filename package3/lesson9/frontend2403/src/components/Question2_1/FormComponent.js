import React, { useState } from 'react'

const FormComponent = (props) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      Name:
      <input type="text"
        onChange={(e) => { setInputValue(e.target.value) }}
        value={inputValue}
      />
      <button onClick={() => { props.handleClick(inputValue) }}>Send</button>
    </div>
  )
}

export default FormComponent