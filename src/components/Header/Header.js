import React from 'react'
import { Link, NavLink, useMatch } from 'react-router-dom'

import './Header.scss'


const Header = () => {
  const matchMainRoute = useMatch({ path: '/', end: true })
  const matchEventItemRoute = useMatch({ path: '/:id', end: true })
  const [activeMainRoute, setActiveMainRoute] = React.useState(false)


  React.useEffect(() => {
    matchMainRoute ?
      setActiveMainRoute(true)
      :
      matchEventItemRoute && matchEventItemRoute.params.id !== 'my-events' ?
        setActiveMainRoute(true)
        :
        setActiveMainRoute(false)
  }, [matchEventItemRoute, matchMainRoute])


  return (
    <div className='header'>
      <Link
        to='/'
        className={`header__link ${activeMainRoute && 'header__link_active'}`}
      >
        События
      </Link>

      {/* др. вариант активной ссылки -> */}
      <NavLink
        to='my-events'
        className={({ isActive }) =>
          isActive ? 'header__link header__link_active' : 'header__link'
        }
      >
        Календарь
      </NavLink>
    </div >
  )
}

export default Header
