import React from 'react'
import { CurationList, CurationSection, Main, MainCategoryList, SliderBlock, SliderDiv } from '../../styles/HomeStyle'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import ImageSlider from './ImageSlider'

const HomeLayout = () => {
  return (
    <>
      <ImageSlider />
      <Main>
      <MainCategoryList>
        {/* {mainCategories.map((cat) => (
          <li key={cat.id}>
            <img src={cat.img} alt="" />
            {cat.text}
          </li>
        ))} */}
      </MainCategoryList>
        <CurationSection>
          <header>
            <h2>지금 뜨는 상품</h2>
            <Link to="/community/pro-knowhow" className="view-all">
              전체보기
              <AiOutlineRight />
            </Link>
          </header>
          {/* <Knowho wList>
            {knowhowList &&
              knowhowList.map((knowhow) => (
                <li key={knowhow.postId}>
                  <Link to={`/community/pro-knowhow/posts/${knowhow.postId}`}>
                    <div>
                      <img
                        src={
                          knowhow.imgUrlList[0] ??
                          'https://pbs.twimg.com/media/EtHubB8UUAEkgbN.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <strong>{knowhow.title}</strong>
                    <em>{knowhow.writer}</em>
                  </Link>
                </li>
              ))}
          </KnowhowList> */}
        </CurationSection>

        <CurationSection>
          <header>
            <h2>커뮤니티 인기글</h2>
            <Link to="/community/soomgo-life" className="view-all">
              전체보기
              <AiOutlineRight />
            </Link>
          </header>
          <CurationList>
  {/*           {postList &&
              postList.map((post) => (
                <li key={post.postId}>
                  <CurationContent
                    to={`/community/soomgo-life/posts/${post.postId}`}
                  >
                    <div>
                      <em>{category[post.subject][0]}</em>
                      <strong>{post.title}</strong>
                      <p>{post.content}</p>
                    </div>
                    {post.imgUrlList[0] && (
                      <img src={post.imgUrlList[0]} alt="" />
                    )}
                  </CurationContent>
                </li>
              ))} */}
          </CurationList>
        </CurationSection>
      </Main>
    </>
  )
}

export default HomeLayout