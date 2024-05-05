import React, { useState } from 'react'

const InnerComponent2 = (props) => {
  // console.log('first', props)
  const content = (
    props?.item?.data?.map((item) => {
      return (
        <div>
          <ul key={item.id}>
            <li>{item.email}</li>
            <li>{item.first_name}</li>
            <li>{item.last_name}</li>
            <li><img src={item.avatar} /></li>
          </ul>
        </div>
      )
    })
  )

  return (
    <>
      <div>InnerComponent2
        {content}
      </div>
      <button onClick={() => props.handleClick(1)}>Page=1</button>
      <button onClick={() => props.handleClick(2)}>Page=2</button>
    </>
  )
}

export default InnerComponent2