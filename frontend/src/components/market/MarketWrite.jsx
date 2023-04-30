import moment from 'moment';
import React, { useCallback, useRef, useState } from 'react'
import Header from '../include/Header';
import Footer from '../include/Footer';
import {  Row, WriteSection } from '../../styles/BoardStyle';

import { useNavigate } from 'react-router-dom';
import { marketInsertDB } from '../../service/marketLogic';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Button, Form, Modal, Table } from 'react-bootstrap'
import MQuillEditor from './MQuillEditor';
import Datetime from 'react-datetime';

import { database } from '../../service/firebase'
import { off, onValue, ref, set} from 'firebase/database'
import styled from 'styled-components';
import { useEffect } from 'react';
import { Input } from 'semantic-ui-react';

const DateContainer=styled.div`/* 일정등록버튼 */
.btnInsert{
  margin-left: 15%;
  margin-right: 0.7em;
  padding: 0 0.9rem;
  border: none;
  border-radius: 5px;
  font-size: 0.93rem;
  font-weight: 600;
  height:2.7em;
  width: 8em;
  background: #4996f3;
  color: white;
  }
  `

const MarketWrite = () => {
  const navigate = useNavigate()
  const [category] = useState(['패키지','투어', '한인택시', '숙소', '렌트카'])
  const [selected, setSelected] = useState('투어')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const quillRef = useRef();

  const [price,setPrice]=useState(0)

  /* 실시간 데이터 베이스 */
  const [show, setShow]=useState(false)//모달창초기값
  const handleClose=()=>setShow(false)//모달창닫기
  const handleShow=()=>setShow(true)//모달창보여주기
    //사용자로부터 입력받은 값-상태훅으로 관리하기
    const [s_no,setM_no]=useState(0)//식별자
    const [buy_no,setM_count]=useState(0)//가능한갯수
    const [start_date,setM_start]=useState('')
    const [finish_date, setM_end]=useState('')
  const [fdata, setFdata]=useState({
    m_no:0,//마켓넘버
    m_count:'',//예약가능 티켓수
    m_start:'',//시작날짜
    m_end:''//끝날짜
  })

   //오늘 이전날짜 비활성화 처리하기
   const yesterday = moment().subtract(1, 'day')
   const valid = (current) => {
     return current.isAfter(yesterday);
   }
   //시작날짜시간
   const handleStart=(date)=>{
    console.log(date);
    const m_start=moment(date._d).format('YYYY-MM-DD')
    console.log(m_start);
    setM_start(m_start)
  }
  //끝날짜시간
  const handleEnd=(date)=>{
    console.log(date);
    const m_end=moment(date._d).format('YYYY-MM-DD')
    console.log(m_end);
    setM_start(m_end)
  }
  //화면에 입력받은 정보 담기
  const handleChangeForm=(event)=>{
    if(event.currentTarget==null){
     return
    }
   //  console.log('폼내용 변경 발생 name:',event.target.name);
   //  console.log('폼내용 변경 발생 value:',event.target.value);
   setFdata({
     ...fdata,
     m_no:Date.now(),//디비에서 가져오기ㅜㅠ
     [event.target.name]:event.target.value
   })
   console.log(fdata)
 }
   //일정등록하기구현
   const dateAdd=(event)=>{
    //버튼이기때문에 이벤트 버블링 사전처리
      event.preventDefault()
    
      const fdata={
        s_no:0,//일정넘버
        market_no:0,//마켓넘버
        buy_no:'',//예약가능 티켓수
        start_date:start_date,//시작날짜
        finish_date:finish_date,//끝날짜
      }
      console.log(fdata);
      //파이어베이스 실시간 디비넣기
     set(ref(database,'market/'+fdata.market_no), fdata);
      handleClose()
    }

     //일정정보가져오기
     const [fdatas,setFdatas]=useState({})
     useEffect(()=>{
       const startCountRef=ref(database,'fdata')
       onValue(startCountRef,(snapshot)=>{
         const data=snapshot.val()
         setFdatas(data)
         return()=>off(startCountRef)
       })
     },[])

     //화면에 입력받은 가격정보 담기
  const handlePriceForm=(e)=>{
      const { name, value } = e.target;
      
        if (name === 'price') {
          setPrice(value);
        } else {
         
        }
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
          // user_id: sessionStorage.getItem('user_id'),
          user_id: 'admin',
          market_category: selected,
          market_title: title,
          market_content: content,
          market_price:price,
          imageNames: files
        }
        const res = await marketInsertDB(market)
        console.log(res.data)
        alert('글쓰기 성공!');
        navigate('/market/write')
      }

  return (
    <>
    <Header />
    <hr></hr>
    <DateContainer>
       <button className='btnInsert' onClick={(e)=>{handleShow()}}>일정등록</button>
    </DateContainer>
         <hr/>
   
        {/* ========================== [[  일정등록 Modal ]] ========================== */}
    <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>일정선택</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="f_memo">         
          <Form.Group className="mb-3 row" controlId="mTitle">
            <Form.Label className="col-sm-2 col-form-label">일정번호</Form.Label>
            <div className='col-sm-10'>
            <Form.Control className='form-control form-control-sm' type="number" name="scheduleNo" onChange={handleChangeForm} placeholder="Enter 일정번호" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">가능수량</Form.Label>
            <div className='col-sm-10'>
            <Form.Control type="number" name="buyNo" onChange={handleChangeForm} className='form-control form-control-sm' placeholder="Enter 가능수량" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="edit-start">
            <Form.Label className="col-sm-2 col-form-label">일정시작</Form.Label>
            <div className='col-sm-10'>
            <Datetime dateFormat='YYYY-MM-DD' isValiDate={valid} name="startDate" onChange={handleStart}/>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="edit-end">
            <Form.Label className="col-sm-2 col-form-label">일정끝</Form.Label>
            <div className='col-sm-10'>
              {/* 페이지 이동 처리? onChange로 하려고 datetime 씀? 이종간이다...*/}
            <Datetime dateFormat='YYYY-MM-DD' isValiDate={valid}  name="finishDate" onChange={handleEnd}/>
            </div>
          </Form.Group>
         
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={dateAdd}>
            일정저장
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 일정등록 Modal ]] ========================== */}    
   
    <WriteSection>
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
          <button className='btnInsert' onClick={(e)=>{marketInsert()}}>등록</button>
        </Row>
        <MQuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
        </WriteSection>

    <Footer />
    </>
  )
}

export default MarketWrite