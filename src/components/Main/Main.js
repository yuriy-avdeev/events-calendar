import React from 'react'

import './Main.scss'
import Card from '../Card/Card'

const Main = () => {

  const cardToRender = JSON.parse(localStorage.getItem('eventsList'))

  return (
    <div className='main'>
      {cardToRender.slice(0, 5).map(cardItem =>
        <Card
          key={cardItem.id}
          card={cardItem}
        />
      )}
    </div>

  )
}

export default Main