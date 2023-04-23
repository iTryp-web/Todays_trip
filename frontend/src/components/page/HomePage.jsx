import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { Main } from '../../styles/HomeStyle'
import HomeLayout from '../Home/HomeLayout'

const HomePage = () => {
  return (
    <>
    <Header />
      <HomeLayout />
    <Footer />
    </>
  )
}

export default HomePage