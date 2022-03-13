import { Link } from 'react-router-dom'
import './EventShortInfo.scss'

const EventShortInfo = ((props) => {

  const handleClickRemove = () => {
    props.removeEvent(props.card)
  }

  return (
    <div className='event-short__box'>
      <img className='event-short__avatar'src={props.avatar} alt='avatar' />
      <div className='event-short__text-box'>
        <h2 className='event-short__title'>{props.card.title}</h2>
        <p className='event-short__text'>{props.card.description}</p>
      </div>

      {/* ниже -> для компонента MyEvents */}
      {
        props.manageEvent && !props.bigScreen ?
          <button
            className='event-short__delete-basket'
            onClick={handleClickRemove}
          >
          </button>
          :
          props.manageEvent && props.bigScreen &&
          <div className='event-short__box-links'>
            <button
              className='event-short__delete-string'
              onClick={handleClickRemove}
            >
              delete
            </button>

            <Link
              className='event-short__link'
              to={`/events-calendar/${props.card.id}`}
            >
              go to page
            </Link>
          </div>
      }
    </div>
  )
})

export default EventShortInfo
