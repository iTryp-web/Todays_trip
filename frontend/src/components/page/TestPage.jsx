import React, { useEffect, useState } from 'react'
import { testDB } from '../../service/dbLogic'
import Bottom from "../include/Bottom";
import Header from "../include/Header";

const TestPage = () => {
  const [test, setTest] = useState([{}])

  useEffect(()=>{
    const testList = async() => {
      const res = await testDB(test)
      console.log(res.data)
      setTest(res.data)
    }
    testList()
  },[])

  return (
    <>
      <Header />
      <h1>연동 테스트 페이지입니다.</h1>
      <div>{test[0].mem_id}</div>
      <div>{test[0].mem_pw}</div>
      <div>{test[0].mem_name}</div>
      <Bottom />
    </>
  )
}

export default TestPage