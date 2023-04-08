import React, { useEffect, useState } from 'react'
import {BoardSection, BoardCategory, CategoryLi, BContentSection, SearchInput, Wrap, StyledSlider, SliderListF, CommunityH3, CategoryUl, BtnSearch, SearchDiv, SearchSelect, SearchInputText, SliderDiv, SliderDivCategory, SliderDivTitle, SliderDivWriter} from '../../styles/BoardStyle'
import { BiSearch } from 'react-icons/bi';
import { Outlet, useNavigate } from 'react-router-dom'
import BoardRow from './BoardRow';

const BoardLayout = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('전체')
  const categories = [
    {
    name: '전체',
    img: '/images/icon-all.png'},
    {
    name: '인기글',
    img: '/images/icon-hot.png'},
    {
    name: '자유',
    img: '/images/icon-free.png'},
    {
    name: '질문',
    img: '/images/icon-qna.png'},
    {
    name: '여행후기',
    img: '/images/icon-review.png'},
    {
    name: '동행찾기',
    img: '/images/icon-together2.png'},
]

const onClickCategory = (name) => {
  setSelected(name)
}

const [posts, setPosts] = useState([{}])
useEffect(() => {
  setPosts([
    {
      board_no: 1,
      board_category: '카테고리',
      board_title: '제목',
      board_content: '내용',
      writer: '작성자',
      date: '작성일',
    }
  ])
}, [])


  return (
    <>
      <BoardSection>
        <BoardCategory>
          <CategoryUl>
            {categories &&
              categories.map((category) => {
                return (
                  <CategoryLi
                    key={category.name}
                    active={category.name === selected}
                    onClick={() => onClickCategory(category.name)}
                  >
                    <img src={category.img} alt={category.name} />
                    {category.name}
                  </CategoryLi>
                );
              })}
          </CategoryUl>
        </BoardCategory>

        <BContentSection className='content'>
          {selected === '전체' && (
            <>
              <h3>지금 가장 뜨거운 오행픽🔥</h3>
              <Wrap>
                <StyledSlider>
                  <div>
                    <SliderListF>
                      <SliderDiv >
                        <SliderDivCategory>
                          공지사항
                        </SliderDivCategory>
                        <SliderDivTitle>
                          오행생활 가이드라인✏️
                        </SliderDivTitle>
                        <SliderDivWriter>
                          iTryp
                        </SliderDivWriter>
                      </SliderDiv>
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
          {posts &&
            posts.map((post) => (
              <BoardRow key={post.board_no} post={post} />
            ))}
          </ul>

          <SearchDiv className='searchDiv'>
            <SearchSelect
              id="search"
              aria-label="분류"
            >
              <option defaultValue>전체</option>
              <option value="board_title">제목</option>
              <option value="mem_id">작성자</option>
              <option value="board_content">내용</option>
            </SearchSelect>
            <SearchInput
              type="text"
              id="keyword"
              placeholder="검색어를 입력하세요"
              onChange={''}
            />
            <BtnSearch className='btnSearch' onClick={'dataSearch'}>
              검색
            </BtnSearch>
          </SearchDiv>
        </BContentSection>
      </BoardSection>
      
      {/* {isFetchingNextPage ? <Loading /> : <div ref={ref} />} */}      
    </>
  )
}

export default BoardLayout