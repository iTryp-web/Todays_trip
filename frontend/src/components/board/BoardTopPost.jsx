import React, { useEffect, useState } from 'react'
import { SliderDiv, SliderDivCategory, SliderDivTitle, SliderDivWriter, SliderMain, SliderSub } from '../../styles/BoardStyle'

const BoardTopPost = () => {
  const [notice, setNotice] = useState({})
  useEffect(() => {
    setNotice({
      board_no: 5,
      user_nickname: 'iTryp',
      board_category: '공지사항',
      board_title: '오행생활 가이드라인✏️',
      type_board: 123,
    })
  }, [])

  const[topPosts, setTopPosts] = useState([
    {
    board_no: 6,
    user_nickname: 'iTryp',
    board_category: '공지사항',
    board_title: '오늘의여행 추천인 입력하고 쿠폰 받으세요🎁',
    type_board: 123,
    },
    {
    board_no: 7,
    user_nickname: 'iTryp',
    board_category: '이벤트',
    board_title: '지금 판매자 가입하면 수수료 0원!🤩',
    type_board: 123,
    },
    {
    board_no: 8,
    user_nickname: '팽구',
    board_category: '자유',
    board_title: '공짜로 여행가는 꿀팁 빨리 들오셈 10분뒤 삭제함',
    type_board: 123,
    },
])


  return (
    <>
      <SliderMain>
        <SliderDiv >
          <SliderDivCategory>
            {notice.board_category}
          </SliderDivCategory>
          <SliderDivTitle>
            {notice.board_title}
          </SliderDivTitle>
          <SliderDivWriter>
            {notice.user_nickname}
          </SliderDivWriter>
        </SliderDiv>
      </SliderMain>

      {topPosts && topPosts.map((post) => {
        return(
          <SliderSub className='sliderSub' key={post.board_no}>
            <SliderDiv >
              <SliderDivCategory>
                {post.board_category}
              </SliderDivCategory>
              <SliderDivTitle>
                {post.board_title}
              </SliderDivTitle>
              <SliderDivWriter>
                {post.user_nickname}
              </SliderDivWriter>
            </SliderDiv>
          </SliderSub>
        )
      })}
    </>
  )
}

export default BoardTopPost