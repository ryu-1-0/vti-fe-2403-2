import React from 'react'
import './card.css'
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
      {
        cards.map((card, index) => {
          return (
            <div className='card__' key={card.id}>
              <div className='card__img'>
                <img src={card.img} />

              </div>
              <div className='card__content'>
                <h1 className='card__title'>{card.title}</h1>
                <p className='card__desc'>
                  {card.desc}
                </p>
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

export default CardGroup