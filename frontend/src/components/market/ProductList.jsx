import React, { useCallback, useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { marketListDB } from '../../service/marketLogic';
import { BtnSearch, SearchInput } from '../../styles/BoardStyle';
import { ProductListBlock, SearchDiv, SelectBlock } from '../../styles/MarketStyle';
import { search } from './MarketData';
import ProductItem from './ProductItem';

const ProductList = () => {
  /* 판매글 목록 */
  // 판매글 담을 객체배열
  const [items, setItems]=useState([{}]);
  //화면위한 테스트 이미지
  // const [items, setItems]=useState([
  //   "https://d2ur7st6jjikze.cloudfront.net/offer_photos/40529/256554_large_1535278177.jpg?1535278177",
  //   "https://d2ur7st6jjikze.cloudfront.net/offer_photos/110343/791143_medium_1680161600.jpg?1680161600",
  //   "https://d2ur7st6jjikze.cloudfront.net/offer_photos/115381/624924_medium_1669801773.jpg?1669801773",
  //   "https://d2ur7st6jjikze.cloudfront.net/offer_photos/53690/336353_medium_1553197206.jpg?1553197206",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-168024507895767045.jpg/640/640",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-168024507895767045.jpg/640/640",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-162303132447303472.jpeg/640/640",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166141476368385159.jpg/640/640",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166356638082651494.png/2560/2560",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166356638082651494.png/2560/2560",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166356638082651494.png/2560/2560",
  //   "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166356638082651494.png/2560/2560",
  // ]);

// 선택한 카테고리 담기
const [selected, setSelected] = useState('')
const handleCategory =  useCallback((name) => {
  console.log('handleCategory => ' + name);
  setSelected(name)
  }, [])

  /* 검색 */
// 선택한 검색 조건
const [searchVal, setSearchVal] = useState('전체')
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
        review_count:item.REVIEW_COUNT,
        star_avg:item.STAR_AVG,
        file_url:item.FILE_URL,
        file_step:item.FILE_STEP,
      }
      
      list.push(obj)
      
    })
    setItems(list)
    setKeyword('')
    const keywordInput = document.getElementById('keyword')
    keywordInput.value = '' // 키워드 input창 초기화
  }
  marketList()
}, [selected, searchStart])

  return (
    <>
     <div style={{'align-items': 'center'}}>
          {/* 마켓검색 */}
          <SearchDiv className='searchDiv'>
            <DropdownButton className='searchDropdown' variant="" title={searchVal}>
              {search.map((item)=>(
                  <Dropdown.Item as="button" key={item} onClick={()=>{
                    handleSearch(item); 
                  }}>
                    {item}
                  </Dropdown.Item>
                )) 
              }
            </DropdownButton>
            <SearchInput type="text" id="keyword" maxLength="60" placeholder="마켓상품을 검색하세요."
              autoComplete="off" onChange={(e)=>{handleSearchKeyword(e.target.value)}} />
            <BtnSearch className='btnSearch' onClick={btnSearch}>
              검색
            </BtnSearch>
          </SearchDiv>
          </div>
        <ProductListBlock>
        <div className="title">
          <h2>마켓</h2>
          <SelectBlock defaultValue="2">
            <option key="1" value="1">
              판매순
            </option>
            <option key="2" value="2">
              리뷰순
            </option>
            <option key="3" value="3">
              높은별점순
            </option>
            <option key="4" value="4">
              낮은별점순
            </option>
            <option key="5" value="5">
              최신순
            </option>
            <option key="6" value="6">
              오래된순
            </option>
          </SelectBlock>
        </div>

          <ProductItem items={items}/>
    
        </ProductListBlock>
    </>
  )
}

export default ProductList
