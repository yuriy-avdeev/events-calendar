import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './EventItem.scss'
import { data } from '../../utils/data'
import { addVisitor, removeVisitor } from '../../functions/func'
import Popup from '../Popup/Popup'
import PopupForm from '../PopupForm/PopupForm'
import PopupConfirm from '../PopupConfirm/PopupConfirm'


const EventItem = () => {
  const { id } = useParams()
  const [card, setCard] = useState(JSON.parse(localStorage.getItem('eventsList')).find(c => c.id === +id))
  const [myEvent, setMyEvent] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)


  useEffect(() => {
    if (!!card.visitors) {
      setMyEvent(card.visitors.includes(data.user.name))
    } else {
      setCard({ ...card, 'visitors': [] })
    }
  }, [])


  const changeVisitorsList = (newVisitor) => {
    // setMyEvent -> после добавления/удаления через try/catch и async/await...
    if (myEvent) { // popup <- confirm:
      removeVisitor(card)
      setMyEvent(false)
    } else { // popup <- form:
      addVisitor(card, newVisitor)
      setMyEvent(true)
    }
  }


  const closePopup = () => {
    setOpenPopup(false)
  }


  return (
    <div className='event'>
      {openPopup &&
        <Popup
          closePopup={closePopup}
          content=
          {
            myEvent ?
              <PopupConfirm
                changeVisitorsList={changeVisitorsList}
                closePopup={closePopup}
              />
              :
              <PopupForm
                card={card}
                defaultName={data.user.name.split(' ')[0]}
                defaultLastName={data.user.name.split(' ')[1]}
                avatar={data.user.avatar}
                changeVisitorsList={changeVisitorsList}
                closePopup={closePopup}
              />
          }
        />
      }

      <div className='event__box-image'>
        <img
          className='event__image'
          src={card.image}
          alt='изображение события'
        />
      </div>

      <div className='event__box-content'>
        <div className='event__content-container'>
          <h2 className='event__content-title'>{card.title}</h2>
          <p className='event__content-date'>{new Date(card.date).toLocaleDateString('ru-RU')}</p>
        </div>
        <p className='event__content-text'>{card.description}</p>
        {
          myEvent ?
            <button
              className='event__content-button event__content-button_red'
              onClick={() => setOpenPopup(true)}
            >
              Cancel
            </button>
            :
            <button
              className='event__content-button'
              onClick={() => setOpenPopup(true)}
            >
              &gt; Sign up
            </button>
        }
      </div>

      <div className='event__box-bottom'>
        <h4 className='event__bottom-title'>Visitors</h4>
        <ul className='event__bottom-list'>
          <li>
            {
              card.visitors && card.visitors.length ?
                card.visitors.map
                  (
                    visitor =>
                      <p className='event__bottom-visitors' key={visitor}>{visitor}</p>
                  )
                :
                <p className='event__bottom-visitors'>No one signed up yet</p>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EventItem
