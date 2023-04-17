import moment from 'moment';
import React, { useCallback, useRef, useState } from 'react'
import { BButton, Row, WriteSection } from '../../styles/BoardStyle';
import Header from '../include/Header';
import Footer from '../include/Footer';

import { useNavigate } from 'react-router-dom';
import { marketInsertDB } from '../../service/marketLogic';
import { Button, Form, Modal, Table } from 'react-bootstrap'
import MQuillEditor from './MQuillEditor';
import Datetime from 'react-datetime';

const MarketWrite = () => {
  const navigate = useNavigate()
  const [category] = useState(['투어', '한인택시', '숙소', '렌트카'])
  const [selected, setSelected] = useState('투어')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);

   //오늘 이전날짜 비활성화 처리하기
   const yesterday = moment().subtract(1, 'day')
   const valid = (current) => {
     return current.isAfter(yesterday);
   }

  // 테스트용 유저아이디
  window.sessionStorage.setItem('user_id', 'test1')

  const quillRef = useRef();

  const handleStart=()=>{

  }
  const handleEnd=()=>{

  }

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
    <Modal.Body>
        <Form id="f_memo">         
  
          <Form.Group className="mb-3 row" controlId="edit-start">
            <Form.Label className="col-sm-2 col-form-label">일정시작</Form.Label>
            <div className='col-sm-10'>
            <Datetime dateFormat='YYYY-MM-DD' isValiDate={valid} name="m_start" onChange={handleStart}/>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="edit-end">
            <Form.Label className="col-sm-2 col-form-label">일정끝</Form.Label>
            <div className='col-sm-10'>
            <Datetime dateFormat='YYYY-MM-DD' isValiDate={valid}  name="m_end" onChange={handleEnd}/>
            </div>
          </Form.Group>
         
        </Form>
        </Modal.Body>
        <MQuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
    <Footer />
    </>
  )
}

export default MarketWrite