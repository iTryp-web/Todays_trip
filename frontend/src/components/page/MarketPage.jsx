import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import ProductList from '../market/ProductList'
import MarketBanner from '../market/MarketBanner'
import PowerSlider from '../market/PowerSlider'
import ProductItem from '../market/ProductItem'
import MarketCategory from '../market/MarketCategory'

const MarketPage = () => {
  return (
    <>
    <Header />
    <MarketCategory/>
    <MarketBanner/>
    <PowerSlider/>
      <ProductList/>
    {/* <Footer /> */}
  </>
  )
}

export default MarketPage
