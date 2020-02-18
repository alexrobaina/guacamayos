import React from 'react'
import { Link } from 'react-scroll'
import c from 'classnames'
import logo from '../../images/logo.png'
import styles from './header.scss'

const Header = () => {
  return (
    <header>
      <nav
        className={c(
          styles.navbar,
          'navbar',
          'fixed-top',
          'navbar-expand-lg',
          'navbar-light',
          'bg-light'
        )}
      >
        <dib className={styles.logo}>
          <img src={logo} alt="logo" />
        </dib>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={c(styles.collapse, "collapse navbar-collapse")}>
          <div className={c(styles.collapse, "justify-center")}>
            <div className={c(styles.navbarNav, "navbar-nav")}>
              <Link
                className={c(styles.navLink, styles.navItem, "nav-item", "nav-link")}
                activeClass="active"
                to="servicios"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Servicios
              </Link>
              <Link
                className={c(styles.navLink, styles.navItem, "nav-item", "nav-link")}
                activeClass="active"
                to="nosotros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Nosotros
              </Link>
              <Link
                className={c(styles.navLink, styles.navItem, "nav-item", "nav-link")}
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>

              <Link
                className={c(styles.navLink, styles.navItem, "nav-item", "nav-link")}
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Video
              </Link>

              <Link
                className={c(styles.navLink, styles.navItem, "nav-item", "nav-link")}
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
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
