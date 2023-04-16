import React, { useCallback, useRef, useState } from 'react'
import { BButton, Row, WriteSection } from '../../styles/BoardStyle';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { marketInsertDB } from '../../service/marketLogic';
import QuillEditor from '../board/QuillEditor';




const MarketWrite = () => {
  const navigate = useNavigate()
  const [category] = useState(['투어', '한인택시', '숙소', '렌트카'])
  const [selected, setSelected] = useState('투어')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  // 테스트용 유저아이디
  window.sessionStorage.setItem('user_id', 'test1')

  const quillRef = useRef();

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

  const marketInsert = async() => {
    console.log('marketInsert');
    console.log(files)
    const market = {
      user_id: sessionStorage.getItem('user_id'),
      market_category: selected,
      market_title: title,
      market_content: content,
      imageNames: files
    }
    const res = await marketInsertDB(market)
    console.log(res)
    navigate('/market')
  }

  return (
    <>
    <Header />
      <WriteSection>
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
          <button className='btnInsert' onClick={(e)=>{marketInsert()}}>등록</button>
        </Row>
        <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
    </WriteSection>
    <Footer />
    </>
  )
}

export default MarketWrite