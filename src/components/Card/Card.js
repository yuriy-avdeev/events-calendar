import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ card }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <h3 className='card__text'>
          {card.title}
        </h3>
        <Link className='card__link' to={`${card.id}`}>Больше</Link>
      </div>

      <Link className='card__link-image' to={`${card.id}`}>
        <img
          className='card__image'
          src={card.image}
          alt='изображение события'
        />
      </Link>
      <p className='card__text card__text-bottom'>{new Date(card.date).toLocaleDateString('ru-RU')}</p>
    </div>
  )
}

export default Card
