import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './header.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query Images {
      logo: file(relativePath: { eq: "logo.png" }, id: {}) {
        id
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <header>
      <div className={styles.logo}>
        <Img fixed={data.logo.childImageSharp.fixed} />
      </div>
      <nav className={styles.containerNavbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLinksLi}>
            <Link spy={true} smooth={true} duration={500} to="services">
              Servicios
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link spy={true} smooth={true} duration={500} to="services">
              Servicios
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link spy={true} smooth={true} duration={500} to="services">
              Servicios
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link spy={true} smooth={true} duration={500} to="services">
              Servicios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
