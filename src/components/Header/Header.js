import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './header.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query Images {
      logo: file(relativePath: { eq: "logo.png" }, id: {}) {
        id
        childImageSharp {
          fixed (
            width: 100
           ){
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
      <nav className={'containerNavbar'}>
        <div className="logo">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </div>
        <div className={'link'}>
          <Link spy={true} smooth={true} duration={500} to="services">
            Servicios
          </Link>
        </div>
        <div className={'link'}>
          <Link spy={true} smooth={true} duration={500} to="about">
            Nosotros
          </Link>
        </div>
        <div className={'link'}>
          <Link spy={true} smooth={true} duration={500} to="portfolio">
            Portfolio
          </Link>
        </div>
        <div className={'link'}>
          <Link spy={true} smooth={true} duration={500} to="videos">
            Videos
          </Link>
        </div>
        <div className={'link'}>
          <Link spy={true} smooth={true} duration={500} to="contact">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
