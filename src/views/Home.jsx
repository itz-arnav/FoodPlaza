import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Trending from '../components/Home/Trending'
import Popular from '../components/Home/Popular'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Trending />
        <Popular />
    </>
  )
}

export default Home