import React from 'react'
import './header.scss'
import Logo from '../../assets/logo/3.png'

const Header = () => {
  return (
    <div className="header">
      <header className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="" className="header__logo-img" />
        </div>
        <nav className="nav">
          <ul className="nav__container">
            <li className="nav__item">Works</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
