import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body1 from './Body1'
import Body2 from './Body2'
import './homePage.css'
const HomePage = () => {
  const [btnBody1, setBtnBody1] = useState(true)
  const [btnBody2, setBtnBody2] = useState(false)
  const onClick1 = () => {
    setBtnBody1(true)
    setBtnBody2(false)
  }
  const onClick2 = () => {
    setBtnBody1(false)
    setBtnBody2(true)

  }
  return (
    <div className='homepage'>
      <div>
        <button onClick={onClick1}>
          Button 1
        </button>
        <button onClick={onClick2}>
          Button 2

        </button>
      </div>
      <Header />
      {btnBody1 ? <Body1 /> : null}
      {btnBody2 ? <Body2 /> : null}

      <Footer />

    </div>
  )
}

export default HomePage