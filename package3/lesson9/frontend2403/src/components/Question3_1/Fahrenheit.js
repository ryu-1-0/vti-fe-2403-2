import React, { useState } from 'react'

const Fahrenheit = (props) => {
  // const [fahrenheit, setFahrenheit] = useState('')
  return (
    <div>
      Fahrenheit:

      <input type="number"
        onChange={(e) => { props.onChange(e.target.value) }}
        value={props.data}
      />
    </div>
  )
}

export default Fahrenheit