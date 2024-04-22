import React from 'react'
import { useState } from 'react'
import './styles/search.css'
const Question2Coppy = () => {
  const [count, setCount] = useState(0)

  const handleCopy = (event) => {
    event.preventDefault()
    setCount((preState) => preState + 1)
    alert(" Don't copy it!")
  }
  const handleImageError = (event) => {
    event.target.src = 'https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0';

  }
  return (
    <>
      <div>

        <img
          className='my-img'
          src="image.jpg"
          onError={handleImageError}
          alt="Image"
        />
      </div>
      <div onCopy={handleCopy}>
        <p>Count:{count}</p>
        <p className="no-copy" >
          Khi User thực hiện Copy (Ctrl + C) đoạn text "Copy me!"
          thì hệ thống sẽ hiện lên cảnh báo " Don't copy it!" và tăng count lên 1 lần
        </p>
      </div>
    </>
  )
}

export default Question2Coppy