import React from 'react'

const CardItem = (props) => {
  return (
    <>
      <div className='card__'>
        <div className='card__img'>
          <img src={props?.cardItem?.img} />

        </div>
        <div className='card__content'>
          <h1 className='card__title'>{props?.cardItem?.title}</h1>
          <p className='card__desc'>
            {props?.cardItem?.desc}
          </p>
        </div>
        {props?.children}
      </div>

    </>

  )
}

export default CardItem