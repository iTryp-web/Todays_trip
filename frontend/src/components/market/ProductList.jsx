import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import { marketListDB } from '../../service/marketLogic';
const ProductListBlock = styled.div`
  padding: 0 4rem;
  max-width: 1256px;
  margin: 5rem auto;
  justify-content: space-between;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      letter-spacing: -2px;
      font-size: 1.3rem;
    }
    span {
      color: var(--red);
      cursor: pointer;
      font-weight: 700;
      &:hover {
        color: var(--light-red);
      }
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    overflow: hidden;
    margin-bottom: 0.3rem;
    border-radius: 5px;
    position: relative;
  }

  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SelectBlock = styled.select`
  border: none;
  outline: none;
  width: 100px;
`;

const ProductList = () => {
  /* 판매글 목록 */
// 판매글 담을 객체배열
const [posts, setPosts] = useState([{}])

// 선택한 카테고리 담기
const [selected, setSelected] = useState('전체')
const handleCategory =  useCallback((name) => {
  console.log('handleCategory => ' + name);
  setSelected(name)
  }, [])

  /* 검색 */
// 선택한 검색 조건
const [searchVal, setSearchVal] = useState('작성자')
// 입력한 검색값
const [keyword, setKeyword] = useState('')
// 검색조건 입력
const handleSearch = useCallback((e) => {
  console.log('handleSearch => ' + e);
  setSearchVal(e)
},[])
// 검색값 입력
const handleSearchKeyword = useCallback((e) => {
  console.log('handleSearchKeyword => ' + e);
  setKeyword(e);
},[]);
// useEffect쓰기위해 useState선언
  const [searchStart, setSearchStart] = useState('')

// 검색 버튼 클릭
const btnSearch =  useCallback((e) => {
  e.preventDefault()
  setSearchStart(new Date())
}, [])

//선택한 카테고리에따라 글목록 출력
useEffect(() => {

   


  const marketList = async() => {
    let market = {}
    // DB로 보내는 조건 - 검색버튼 눌렀을때만 조건추가
    market = {
      market_category: selected,
      search: searchVal,
      keyword: keyword,
    }
    const res = await marketListDB(market)
    console.log(res.data)
    const list = []
    const datas = res.data
    datas.forEach((item) => {
      console.log(item)
      // DB에서 받은 데이터
      const obj = {
        market_no: item.MARKET_NO,
        user_nickname: item.USER_NICKNAME,
        type_market: item.TYPE_MARKET,
        market_category: item.MARKET_CATEGORY,
        market_title: item.MARKET_TITLE,
        market_content: item.MARKET_CONTENT,
        market_price: item.MARKET_PRICE,
        market_date: item.MARKET_DATE,
      }
      list.push(obj)
    })
    setPosts(list)
    setKeyword('')
    const keywordInput = document.getElementById('keyword')
    keywordInput.value = '' // 키워드 input창 초기화
  }
  marketList()
}, [selected, searchStart])

const content=posts.map((post) => {
  return <marketRow key={post.market_no} post={post} />
})

  return (
    <>
        <ProductListBlock>
        <div className="title">
          <h2>인기상품</h2>
          <SelectBlock defaultValue="2">
            <option key="1" value="1">
              판매순
            </option>
            <option key="2" value="2">
              인기순
            </option>
            <option key="3" value="3">
              많은 리뷰순
            </option>
            <option key="4" value="4">
              유저사진 많은순
            </option>
            <option key="5" value="5">
              높은가격순
            </option>
            <option key="6" value="6">
              낮은가격순
            </option>
            <option key="7" value="7">
              최신순
            </option>
          </SelectBlock>
        </div>
        <div className="items">
        <img src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-162303132447303472.jpeg/640/640" alt="아엠홈"></img>
        </div>
        {/* 글 목록 */}
        <ul>
            {posts && posts.map((post) => {
              return <marketRow key={post.market_no} post={post} />
            })}
          </ul>
        </ProductListBlock>
    </>
  )
}

export default ProductList
