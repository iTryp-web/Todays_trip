import React, { useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import {CommunityHeader, BtnPost, CommunityNav, LifeSection, LifeCategory, CategoryItem, LifeContentSection, SearchInput, Wrap, StyledSlider, SliderListF, CommunityH3} from '../../styles/BoardStyle'
import { BiSearch } from 'react-icons/bi';
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'

const BoardLayout = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('전체')
  const categories = [
    {name: '전체'},
    {name: '인기글'},
    {name: '자유'},
    {name: '동행'}
]
const onClickCategory = (name) => {
  setSelected(name)
}
  return (
    <>
      <Header />
      <LifeSection>
        <LifeCategory>
          <ul>
            <CommunityH3>커뮤니티</CommunityH3>
            {categories &&
              categories.map((category) => {
                return (
                  <CategoryItem
                    key={category.name}
                    tabIndex="0"
                    active={category.name === selected}
                    onClick={() => onClickCategory(category.name)}
                  >
                    {category.name}
                  </CategoryItem>
                );
              })}
          </ul>
        </LifeCategory>

        <LifeContentSection>
          {selected === 'ALL' && (
            <>
              <SearchInput>
                <BiSearch />
                <label htmlFor="search-community" hidden>
                  커뮤니티 글 검색
                </label>
                <input
                  id="search-community"
                  type="text"
                  /* onChange={onChangeInput} */
                  placeholder="키워드로 제목, 내용, 태그를 검색할 수 있어요."
                  /* onClick={() => setIsModalShown(true)} */
                  autoComplete="off"
                />
            {/*    {isModalShown && (
                  <SearchModal inputValue={typed} setShown={setIsModalShown} />
                )} */}
              </SearchInput>
              <h3>지금 가장 뜨거운 오행픽🔥</h3>
              <Wrap>
                <StyledSlider /* {...settings} */>
                  <div>
                    <SliderListF>
                      {/* FIXME: inline-style 수정 필요 */}
                      <div style={{ padding: '20px' }}>
                        <div style={{ fontSize: '14px' }}>공지사항</div>
                        <div style={{ fontWeight: '600', marginTop: '13px' }}>
                          올바른 커뮤니티 사용법 오행생활 가이드✏️
                        </div>
                        <div
                          div
                          style={{ fontSize: '14px', marginTop: '30px' }}
                        >
                          Soomgo
                        </div>
                      </div>
                    </SliderListF>
                  </div>
                  {/* {viewlist_query.data.postList.map((v, i) => {
                    return (
                      <div key={i}>
                        <SliderList
                          onClick={() => {
                            navigate(
                              `/community/soomgo-life/posts/${v.postId}`,
                            );
                          }}
                        >
                          <div style={{ padding: '20px' }}>
                            <div
                              style={{
                                fontSize: '12px',
                                color: '#888',
                                fontWeight: '500',
                              }}
                            >
                              {category[v.subject][0]}
                            </div>
                            <SliderTitle
                              style={{ fontWeight: '600', marginTop: '13px' }}
                            >
                              {v.title}
                              {/* {v.title.length >= 38
                                ? v.title.slice(0, 39) + '...'
                                : v.title}//
                            </SliderTitle>
                            <div
                              style={{
                                display: 'flex',
                                fontSize: '15px',
                                marginTop: '55px',
                                color: '#c5c5c5',
                                position: 'absolute',
                                bottom: '20px',
                              }}
                            >
                              <div
                                style={{
                                  marginRight: '3px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <AiFillLike />
                              </div>
                              <div> {v.likeCount}</div>

                              <div
                                style={{
                                  marginLeft: '15px',
                                  marginRight: '6px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <BsChatDotsFill
                                  style={{ transform: 'rotateY(180deg)' }}
                                />
                              </div>
                              <div> {v.commentCount}</div>
                            </div>
                          </div>
                        </SliderList>
                      </div>
                    );
                  })} */}
                </StyledSlider>
              </Wrap>
            </>
          )}

          <ul>
          {/*   {postList &&
              postList.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.data.map((post) => (
                    <PostItem key={post.postId} post={post} />
                  ))}
                </React.Fragment>
              ))} */}
          </ul>
        </LifeContentSection>
      </LifeSection>
      {/* {isFetchingNextPage ? <Loading /> : <div ref={ref} />} */}
      <Bottom />
    </>
  )
}

export default BoardLayout
