import React from 'react'
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const {bno} = useParams() // 해시값으로 가져오기
  console.log(bno);

  return (
    <>
      <h1>
        {bno}번글
      </h1>
    </>
  )
}

export default BoardDetail
