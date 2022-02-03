import React from 'react'
import { Link, useMatch } from 'react-router-dom'

import './Header.scss'

const Header = () => {

  let matchMain = useMatch({ path: '/', end: true })
  let match404 = useMatch({ path: '/my-events', end: true })

  return (
    <div className="header">
      <Link
        to="/"
        className={`header__link ${matchMain && "header__link_active"}`}
      >
        События
      </Link>

      <Link
        to="/my-events"
        className={`header__link ${match404 && "header__link_active"}`}
      >
        Календарь
      </Link>
    </div >
  )
}

export default Header
