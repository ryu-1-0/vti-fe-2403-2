import React from 'react'
import Component3 from '../Component3/Component3'

const Component2 = (props) => {
  return (
    <div>&nbsp;&nbsp;&nbsp;&nbsp;Component2
      <Component3 data={props.data} />

    </div>
  )
}

export default Component2