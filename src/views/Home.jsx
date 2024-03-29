import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Trending from '../components/Home/Trending'
import Popular from '../components/Home/Popular'
import Contact from '../components/Home/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Trending />
        <Popular />
        <Contact />
        <Footer />
    </>
  )
}

export default Home