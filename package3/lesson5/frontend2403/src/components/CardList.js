import React from 'react'
import '../components/cardGroup/card.css'
import CardItem from './cardGroup/CardItem'
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
const CardList = () => {
  return (
    <div className='card-container'>
      {/* <h3>CardList</h3> */}

      {
        cards.map((card, index) => {
          return (
            <CardItem cardItem={card} key={card.id} >
              <h1>This is children</h1>
            </CardItem>
          )
        })
      }


    </div>
  )
}

export default CardList