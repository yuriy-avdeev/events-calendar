import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__message'>Page not found</p>
      <Link className='not-found__link' to='events-calendar/'>To main</Link>
    </div>
  )
}

export default PageNotFound