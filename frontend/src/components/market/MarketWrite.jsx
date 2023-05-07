import moment from 'moment';
import React, { useCallback, useRef, useState } from 'react'
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Row } from '../../styles/BoardStyle';
import { marketInsertDB } from '../../service/marketLogic';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Form} from 'react-bootstrap'
import MQuillEditor from './MQuillEditor';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useEffect } from 'react';

 const WriteSection = styled.section`
  max-width: 1344px;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2.5em;
  margin-bottom: 6em;
  .titleP {
    color: black;
    overflow: hidden;
    padding-right: 5px;
    margin-bottom: 10px;
    font-weight: 600;
  
  }
`;

const MarketWrite = () => {
  const navigate=useNavigate();

  // 관리자 구분-세션스토리지 꺼내오기
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  const [userID] = useState(window.sessionStorage.getItem('user_id'))
  console.log(userID)
  
  // 리프레쉬용 변수
  const [start, setStart] = useState()

  const [category] = useState(['패키지','투어', '티켓', '교통', '숙소'])
  const [selected, setSelected] = useState('투어')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const [price,setPrice]=useState(0)
  const quillRef = useRef();

  // 관리자 제외 URL차단
  useEffect(() => {
    if(userRole != 2) {
      navigate('/')
    }
  }, [userID, userRole])

  
  
  const handleCategory = useCallback((e) => {
    setSelected(e);
  },[]);

  const handleTitle = useCallback((e) => {
    console.log(e);
    setTitle(e);
  },[]);

  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  },[]);

  const handleFiles = useCallback((value) => {
    console.log(value);
      setFiles([...files, value]); // 깊은복사
  },[files]);

  const [mno, setMno]=useState(0)
  useEffect(()=>{
    setMno(Date.now())
  },[])
  console.log(mno);

      const marketInsert = async() => {
        console.log('marketInsert');
        console.log(files)
        const market = {
          user_id: userID,
          market_no:mno,
          market_category: selected,
          market_title: title,
          market_content: content,
          market_price:price,
          imageNames: files
        }
        const res = await marketInsertDB(market)
        console.log(res.data)
        alert('글쓰기 성공!');
        setStart(new Date())//리프레쉬용
      }

        //화면에 입력받은 가격정보 담기
    const handlePriceForm=(e)=>{
      const { name, value } = e.target;
      
        if (name === 'price') {
          setPrice(value);
        } else {
        setPrice(0)
        }
      }

  return (
    <>
    <Header />
  

    <WriteSection>
            <p className='titleP'>마켓넘버  {mno}</p>
        <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">가격</Form.Label>
            <div className='col-sm-10'>
            <Form.Control type="number" name="price" onChange={handlePriceForm} className='form-control form-control-sm' placeholder="Enter 인당가격" />
            </div>
          </Form.Group>
        <Row>
          <DropdownButton className='categoryDropdown' variant="" title={selected}>
            {category.map((item, index)=>(
                <Dropdown.Item as="button" key={index} onClick={()=>{
                  handleCategory(item); 
                }}>
                  {item}
                </Dropdown.Item>
              )) 
            }
          </DropdownButton>
        </Row>
        <Row>
          <input
            type="text"
            id="board_title"
            maxLength="60"
            placeholder="제목을 입력해주세요."
            autoComplete="off"
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <button className='btnInsert' onClick={(e)=>{marketInsert(); navigate('/market/write/schedule',{state:{market_no:mno}})}}>등록</button>
        </Row>
        <MQuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
        </WriteSection>

    <Footer />
    </>
  )
}

export default MarketWrite