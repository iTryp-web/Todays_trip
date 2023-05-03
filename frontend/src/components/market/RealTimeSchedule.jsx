import React from 'react'
import moment from 'moment';
import { useCallback, useRef, useState } from 'react'
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Button, Form, Modal, Table } from 'react-bootstrap'
import Datetime from 'react-datetime';

//파이어 베이스 실시간 디비
import { database } from '../../service/firebase'
import { off, onValue, ref, remove, set} from 'firebase/database'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import ScheduleRow from './ScheduleRow';

const DateContainer=styled.div`/* 일정등록제목 */
.btnInsert{
  // margin-left: 15%;
  // display:flex;
  text-align:center;
  margin-right: 0.7em;
  padding: 0 0.9rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  height:2.7em;
  width: 8em;
  background: #4996f3;
  color: white;
  }
  `

  const WriteSection = styled.section`
  max-width: 1000px;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2.5em;
  margin-bottom: 6em;
`;

const RealTimeSchedule = () => {
  const navigate = useNavigate()
  // 리프레쉬용 변수
  const [start, setStart] = useState()
  
 
  /* 실시간 데이터 베이스 */
 
  //마켓넘버-navigate('/market/write/schedule',{state:{market_no:mno}})
    const location = useLocation();
    const tempMno = useState(location.state?.market_no);//넘어와서 숫자 고정
    console.log(tempMno[0])
  
    //사용자로부터 입력받은 값-상태훅으로 관리하기
    const [s_no,setS_no]=useState(0)//식별자
    useEffect(()=>{
      setS_no(Date.now())
    },[])
    const [s_count,setS_count]=useState(0)//가능한갯수
    
    const [start_date,setM_start]=useState('')
    const [finish_date, setM_end]=useState('')
    const [fdata, setFdata]=useState({})

   //오늘 이전날짜 비활성화 처리하기
   const yesterday = moment().subtract(1, 'day')
   const valid = (current) => {
     return current.isAfter(yesterday);
   }


   //시작날짜시간
   const handleStart=(date)=>{
    console.log(date);
    const m_start=moment(date._d).format('YYYY-MM-DD, a h:mm')
    console.log(m_start);
    setM_start(m_start)
  }
  //끝날짜시간
  const handleEnd=(date)=>{
    console.log(date);
    const m_end=moment(date._d).format('YYYY-MM-DD, a h:mm')
    console.log(m_end);
    setM_end(m_end)
  }
  //화면에 입력받은 정보 담기-가능수량, 
  const handleChangeForm=(event)=>{
    console.log(event)
    setS_count(event)
  
  //  setFdata({
  //    ...fdata,
  //   //  s_no:Date.now(),//십진수 날짜 정보 안겹치는 번호를 넣어줌 
  //   //  [event.target.name]:event.target.value
  //  })
  //  console.log(fdata)
  }
   //일정등록하기구현
   const dateAdd=()=>{//파이어 베이스에서 insertm update 같다
   
      const fdata={
        s_no:s_no,//일정넘버
        market_no:tempMno[0],//마켓넘버
        s_count:Number(s_count),//예약가능 티켓수
        start_date:start_date,//시작날짜
        finish_date:finish_date,//끝날짜
      }
      console.log(fdata);
      //파이어베이스 실시간 디비넣기
     set(ref(database,'market/'+fdata.s_no), fdata);
      window.location.reload()
    }

     //일정정보가져오기
     const [fdatas,setFdatas]=useState({})

     useEffect(()=>{
       console.log('useEffect');
       const startCountRef=ref(database,'market')
       onValue(startCountRef,(snapshot)=>{
         const data=snapshot.val()
         console.log(data)
         setFdatas(data)
         //console.log(fdatas);
         return()=>off(startCountRef)
       })
     },[]) //fdatas
     console.log(fdatas);
  
   
  return (
    <>
      <Header/>
      <hr/>
      <DateContainer>
      <h2>마켓글작성 - 일정등록</h2>
      </DateContainer>

    <WriteSection>

      <Form id="f_memo">
        <Form.Group className="mb-3 row" controlId="mTitle">
          <Form.Label className="col-sm-2 col-form-label">
            일정번호
          </Form.Label>
          <div className="col-sm-10">
            <Form.Control
              className="form-control form-control-sm"
              type="number"
              name="scheduleNo"
              value={s_no}
              placeholder=" 일정번호 자동생성 "
              onChange={(e) =>
                handleChangeForm(e.target.value, 's_no')
              }
              disabled
              />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row" controlId="boardWriter">
          <Form.Label className="col-sm-2 col-form-label">
            가능수량
          </Form.Label>
          <div className="col-sm-10">
            <Form.Control
              type="number"
              name="buycount"
              value={fdata.s_count}
              onChange={(e) =>
                handleChangeForm(e.target.value, 's_count')
              }
              className="form-control form-control-sm"
              placeholder="Enter 가능수량"
              />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="edit-start">
              <Form.Label className="col-sm-2 col-form-label">
                일정시작
              </Form.Label>
              <div className="col-sm-10">
                <Datetime
                  dateFormat="YYYY-MM-DD"
                  isValiDate={valid}
                  name="startDate"
                  onChange={handleStart}
                  />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="edit-end">
              <Form.Label className="col-sm-2 col-form-label">일정끝</Form.Label>
              <div className="col-sm-10">
                <Datetime
                  dateFormat="YYYY-MM-DD"
                  isValiDate={valid}
                  name="finishDate"
                  onChange={handleEnd}
                  />
              </div>
            </Form.Group>
          </Form>
  

        <div className="book-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>마켓번호</th>
                <th>일정번호</th>
                <th>수량</th>
                <th>일정시간</th>
                <th>삭제하기</th>
              </tr>
            </thead>
            <tbody>
              {fdatas&&//데이터가 한건도 없는 경우를 고려
              Object.keys(fdatas).map((key)=>(
                <ScheduleRow key={key} fdata={fdatas[key]} setStart={setStart}/>
                ))
              }
            </tbody>
          </Table>
          <hr />
          <div className="booklist-footer">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={dateAdd}>
              {/* <Button onClick={(e) => {
                    dateAdd();
                    setStart();
                  }}> */}
                일정등록
              </Button>
              <Button onClick={()=>{navigate('/market/all')}} style={{ marginLeft: '1rem' }}>
                마켓글쓰기 완료
              </Button>
              </div>
            </div>
          </div>
        </WriteSection> 
      <Footer/>
    </>
  )
}

export default RealTimeSchedule
