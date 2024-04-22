import React from 'react'

const Ques1Item = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Full Name: {props?.ques1Item?.fullName}</h3>
      <p>Age: {props?.ques1Item?.age}</p>
      <p>Title: {props?.ques1Item?.slogan}</p>
      <p>Title1: {props?.title1 ?? 'ko co '}</p>
      {/* <p>Title1: {props?.title1 || 'ko co '}</p> */}
      {props?.children}

    </div>
    // <div>
    //   <h3>Full Name: {props?.fullName}</h3>
    //   <p>Age: {props?.age}</p>
    //   <p>Title: {props?.title}</p>

    // </div>
  )
}

export default Ques1Item