import React from 'react'

import './Main.scss'
import Card from '../Card/Card'
import SelectArea from '../SelectArea/SelectArea'

import { data } from '../../utils/data'
import { getList } from '../../functions/func'


const Main = () => {
  const [cardsToRender, setCardsToRender] = React.useState([])

  React.useEffect(() => {
    // setCardsToRender при 1-й загрузке (при пустом localStorage) -> после установки year, month
    data.changedMonth && getRenderList()
  }, [])

  const getRenderList = () => {
    setCardsToRender(getList(JSON.parse(localStorage.getItem('eventsList'))))
  }


  return (
    <div className='main'>
      <SelectArea
        changeSelect={getRenderList} 
        shift={3}
      />

      {
        cardsToRender.length ?
          <div className='main__grid'>
            {cardsToRender.slice(0, 6).map(cardItem =>
              <Card
                key={cardItem.id}
                card={cardItem}
              />
            )}
          </div>
          :
          <h3 className='main__message'>Событий в этом месяце нет!</h3>
      }
    </div>

  )
}

export default Main