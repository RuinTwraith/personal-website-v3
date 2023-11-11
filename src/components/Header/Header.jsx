import './header.scss'
import Logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import Image from '../Image'

const Header = () => {
  return (
    <div className="header">
      <header className="header__container">
        <div className="header__logo">
          <Link to="/">
            <Image path="logo/logo.png" customClass="header__logo-img" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__container">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
