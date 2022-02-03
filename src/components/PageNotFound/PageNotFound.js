import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h3 className='not-found__title'>Ошибка - 404</h3>
      <p className='not-found__message'>Страница не найдена</p>
      <Link className='not-found__link' to='/'>На главную</Link>
    </div>
  )
}

export default PageNotFound