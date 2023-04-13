import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import ProductList from '../market/ProductList'
import MarketBanner from '../market/MarketBanner'
import PowerSlider from '../market/PowerSlider'

const MarketPage = () => {
  return (
    <>
    <Header />
    <MarketBanner/>
    <PowerSlider/>
      <ProductList/>
    <Footer />
  </>
  )
}

export default MarketPage
