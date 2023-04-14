import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import ProductList from '../market/ProductList'
import MarketBanner from '../market/MarketBanner'
import PowerSlider from '../market/PowerSlider'
import ProductItem from '../market/ProductItem'

const MarketPage = () => {
  return (
    <>
    <Header />
    <MarketBanner/>
    <PowerSlider/>
      <ProductList/>
      <ProductItem/>
    <Footer />
  </>
  )
}

export default MarketPage
