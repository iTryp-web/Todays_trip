import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import HomeLayout from '../home/HomeLayout'

const HomePage = ({authLogic}) => {
  return (
    <>
    <Header authLogic={authLogic} />
      <HomeLayout />
    <Footer />
    </>
  )
}

export default HomePage