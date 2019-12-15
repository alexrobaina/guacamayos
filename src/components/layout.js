import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import SEO from '../components/seo'
import Carousel from './Carrousel'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import './layout.scss'


const Layout = ({ children }) => {
    return (
        <>
            <SEO
                title="Guacamayos visual"
                description="Fotografia y video de casamientos en Buenos Aires"
            />
            <Header />
            <Carousel />
            <Services />
            <div className="background-1"></div>
            <About />
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
