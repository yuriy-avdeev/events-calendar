import { useEffect, useState } from 'react'

import './MyEvents.scss'
import SelectArea from '../SelectArea/SelectArea'
import EventShortInfo from '../EventShortInfo/EventShortInfo'
import Popup from '../Popup/Popup'
import PopupConfirm from '../PopupConfirm/PopupConfirm'

import { data } from '../../utils/data'
import { removeVisitor, getList } from '../../functions/func'


const MyEvents = () => {
  const resolution = window.matchMedia('(min-width: 768px)') // возвр. объект
  const [bigScreen, setBigScreen] = useState(resolution.matches)
  const [fullListThisMonth, setFullListThisMonth] = useState([])
  const [listToRender, setListToRender] = useState([])
  const [hiddenButton, setHiddenButton] = useState(true)
  const [openPopup, setOpenPopup] = useState(false)
  const [currentCard, setCurrentCard] = useState({})
  // console.log('data.user.myEvents -', data.user.myEvents)
  // console.log('fullListThisMonth -', fullListThisMonth)
  // console.log('listToRender -', listToRender)
  // console.log(hiddenButton)


  useEffect(() => {
    setFullListThisMonth(getList(data.user.myEvents))
  }, [])


  useEffect(() => {
    setListToRender(fullListThisMonth.slice(0, 3))
  }, [fullListThisMonth])


  useEffect(() => {
    setHiddenButton(listToRender.length >= fullListThisMonth.length)
  }, [fullListThisMonth, listToRender])


  useEffect(() => {
    resolution.onchange = () => { // переход через 768рх
      resolution.matches ? // >768 === true
        setBigScreen(true)
        :
        setBigScreen(false)
    }
    return resolution.onchange
  }, [resolution])


  const changeSelect = () => {
    setFullListThisMonth(getList(data.user.myEvents))
  }


  const removeEvent = (card) => {
    if (openPopup) {
      //  click из PopupConfirm
      removeVisitor(currentCard)
      // setListToRender -> после удаления через try/catch и async/await...
      setListToRender(listToRender.filter(c => c.id !== currentCard.id))
    } else {
      // - click из EventShortInfo
      setCurrentCard(card)
      setOpenPopup(true)
    }
  }


  const addCardsToRender = () => {
    const step = 1
    if (listToRender.length < fullListThisMonth.length) {
      setListToRender(
        fullListThisMonth.slice(0, (listToRender.length + step))
      )
    }
  }


  const closePopup = () => {
    setOpenPopup(false)
  }


  return (
    <div className='my-events'>
      {openPopup &&
        <Popup
          closePopup={closePopup}
          content=
          {
            <PopupConfirm
              changeVisitorsList={removeEvent}
              closePopup={closePopup}
            />
          }
        />
      }

      <SelectArea
        changeSelect={changeSelect}
        shift={0}
      />

      {
        listToRender.length ?
          <div className='my-events__list'>
            {
              listToRender.map(event =>
                <EventShortInfo
                  key={event.id}
                  card={event}
                  avatar={data.user.avatar}
                  manageEvent={true}
                  bigScreen={bigScreen}
                  removeEvent={removeEvent}
                />
              )}
          </div>
          :
          <h4 className='my-events__message'>У Вас нет мероприятий в этом месяце!</h4>
      }

      {listToRender.length && !hiddenButton ?
        <button
          className='my-events__button'
          onClick={addCardsToRender}
          disabled={hiddenButton}
        >
          загрузить больше
        </button>
        :
        null}
    </div>
  )
}

export default MyEvents