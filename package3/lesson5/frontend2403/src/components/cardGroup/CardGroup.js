import React from 'react'
import './card.css'
import CardItem from './CardItem'
const CardGroup = () => {
  const cards = [
    {
      id: '1',
      img: 'https://aptechbmt.edu.vn/uploads/news/2019_09/lap-trinh.png',
      title: 'This is for you item ',
      desc: 'This is description '
    },
    {
      id: '2',
      img: 'https://aptechbmt.edu.vn/uploads/news/2019_09/lap-trinh.png',
      title: 'This is for you item 2',
      desc: 'This is description 2'
    },
    {
      id: '3',
      img: 'https://aptechbmt.edu.vn/uploads/news/2019_09/lap-trinh.png',
      title: 'This is for you item 3',
      desc: 'This is description 3'
    },
  ]
  return (
    <div className='card-container'>
      <h3>CardGroup</h3>
      {
        cards.map((card, index) => {
          return (
            <CardItem cardItem={card} key={card.id} />
          )
        })
      }


    </div>
  )
}

export default CardGroup