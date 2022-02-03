import React from 'react'
import { Link, useMatch } from 'react-router-dom'

import './Header.scss'
import envelope from '../../images/envelope.svg'
import envelopeBlue from '../../images/envelopeBlue.svg'

const Header = () => {

  let matchMain = useMatch({ path: '/', end: true })
  let match404 = useMatch({ path: '/404', end: true })

  return (
    <div className="header">
      <Link
        to="/"
        className={`header__link ${matchMain && "header__link_active"}`}
      >
        {/* <img
          src={!matchMain ? envelope : envelopeBlue}
          className='header__link-envelope'
          alt="конверт"
        /> */}
        События
      </Link>

      <Link
        to="/404"
        className={`header__link ${match404 && "header__link_active"}`}
      >
        Календарь
      </Link>
    </div >
  )
}

export default Header
