import React from 'react'
import SEO from '../components/seo'
import Header from '../components/Header/Header'
import Carousel from '../components/Carrousel'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'

const IndexPage = () => (
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

export default IndexPage
