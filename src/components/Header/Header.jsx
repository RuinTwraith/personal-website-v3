import React from 'react'
import './header.scss'
import Logo from '../../assets/logo/3.png'

const Header = () => {
  return (
    <div className="header">
      <header className="header__container">
        <div className="header__logo">
          {/* <a href="#"><h1>DK</h1></a> */}
          <img src={Logo} alt="" className="header__logo-img" />
        </div>
        <nav className="nav">
          <ul className="nav__container">
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Blogs</li>
            <li className="nav__item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
