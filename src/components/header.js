import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.scss'
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className={'container'}>
      <h1 className={'link'}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Pagina 1
        </Link>
      </h1>
      <h1 className={'link'}>
        <Link
          to="/prueba"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Pagina 2
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
