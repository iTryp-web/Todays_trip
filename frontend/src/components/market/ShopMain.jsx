import React, { useEffect, useState } from 'react'
import MainHeader from '../../include/MainHeader'
import ShopBar from './ShopBar'
import "../../css/shop.css"
import styled from 'styled-components'
import { productListDB } from '../../../service/ShopDBLogic'
import ShopRow from './ShopRow'
const ShopMain = () => {

  // 상품 목록
  const [productList, setProductList] = useState([])

  useEffect(() => {

    const boardList = async() => {
      const res = await productListDB()
      console.log(res.data)
      const list = []
      res.data.forEach((item) => {
        const obj = {
          product_title: item.product_title,
          product_price: item.product_price,
          product_image: item.product_image
        } 
        list.push(obj)       
      })
      setProductList(list)
    }
    boardList();
    console.log(productList)
  },[])





  return (
    <>
      <MainHeader/> 
      <ShopBar/>
{/*       <div>
        <ul style={{postion:"relative"}}>
          <li style={{float: "left", textAlign: "center", listStyle: "none"}}>
            <span>전체</span>
          </li>
          <li>
            <span>조회수</span>
          </li>
          <li>
            <span>가격순</span>
          </li>
          <li>
            <span>등록순</span>
          </li>
        </ul>
      </div> */}
      <div className="prodiv">
      {productList.map((board,index) => (
        <ShopRow key={index} board={board} />
        ))}
      </div>
    </>
  )
}

export default ShopMain