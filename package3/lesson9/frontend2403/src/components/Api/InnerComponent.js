import React, { useState } from 'react'
import InnerComponent2 from './InnerComponent2'

const InnerComponent = (props) => {
  console.log('1', props)
  return (
    <div>InnerComponent
      <InnerComponent2 item={props.item} handleClick={props.handleClick} />
    </div>
  )
}

export default InnerComponent