import React, { useCallback, useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';
import { marketListDB } from '../../service/marketLogic';
import { BtnSearch, SearchInput } from '../../styles/BoardStyle';
import { ProductListBlock, SearchDiv, SelectBlock } from '../../styles/MarketStyle';
import { categories, search } from './MarketData';
import ProductItem from './ProductItem';

const ProductList = () => {
  // 헤더 검색용
  const url = window.location.search;
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if(searchParams.get('keyword') != null) {
      setSearchVal('제목+내용')
      setKeyword(searchParams.get('keyword'))
      setSearchStart(new Date())
    }
  }, [url])

  /* 판매글 목록 */
    // 판매글 담을 객체배열
    const [items, setItems]=useState([{}]);

    // 파라미터의 카테고리값
    let {category} = useParams()
    console.log(category);

    // 선택한 카테고리 담기
    const [selected, setSelected] = useState('')

    // 파라미터 카테고리 영어(해시값) -> 한글 카테고리명
    useEffect(() => {
      categories.map(gory => {
        if(gory.category === category) {
          setSelected(gory.name)
        }
      })
    }, [category])

  /* 검색 */
// 선택한 검색 조건
const [searchVal, setSearchVal] = useState('제목')
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

//필터선택
let [filter,setFilter]=useState('최신');

const handleFilter=(select)=>{
  setFilter(select.target.value)
}


//선택한 카테고리에따라 글목록 출력
useEffect(() => {


  const marketList = async() => {
    
    let market = {}
    // DB로 보내는 조건 - 검색버튼 눌렀을때만 조건추가
    market = {
      market_category: selected,
      search: searchVal,
      keyword: keyword,
      filter: filter
    }
    const res = await marketListDB(market)
    console.log(res)
    console.log(res.data)
    const list = []
    const datas = res.data
    console.log(datas);
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
}, [selected, searchStart, filter])

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
          <SelectBlock defaultValue="최신" onChange={handleFilter}>
            <option key="1" value="리뷰">
              리뷰순
            </option>
            <option key="2" value="별점">
              별점순
            </option>
            <option key="3" value="최신">
              최신순
            </option>
            <option key="4" value="높은가격">
              높은가격순
            </option>
            <option key="5" value="낮은가격">
              낮은가격순
            </option>
          </SelectBlock>
        </div>

          <ProductItem items={items}/>
    
        </ProductListBlock>
    </>
  )
}

export default ProductList
