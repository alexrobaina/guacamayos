import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../images/logo.png'
import './header.scss'

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <dib className="logo">
          <img src={logo} alt="logo" />
        </dib>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="justify-center">
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="servicios"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                servicios
                          </Link>

              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="nosotros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Nosotros
                          </Link>

              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Portfolio
                          </Link>

              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Video
                          </Link>

              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contacto
                          </Link>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
