import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { Main } from '../../styles/HomeStyle'
import HomeLayout from '../Home/HomeLayout'

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