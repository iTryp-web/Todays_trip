import React, { useEffect, useState } from 'react'
import { SliderDiv, SliderDivCategory, SliderDivTitle, SliderDivWriter, SliderMain, SliderSub } from '../../styles/BoardStyle'
import { topNotice, topPost } from './boardData'

const BoardTopPost = () => {
  const [notice, setNotice] = useState({})
  useEffect(() => {
    setNotice(topNotice)
  }, [])

  const[topPosts, setTopPosts] = useState([{}])
  useEffect(() => {
    setTopPosts(topPost)
  }, [])

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