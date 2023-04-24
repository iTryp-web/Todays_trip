import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { ReviewUI } from '../../styles/MarketStyle'
import Pagination from '../include/Pagination';
import { qnaData } from './MarketData';
import QnaRow from './QnaRow';

const MarketQna = ({mno}) => {
  //문의글 갯수
  const qcount=qnaData.length;
  // 페이지넘기기
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [show, setShow]=useState(false)//모달창초기값
  const handleClose=()=>setShow(false)//모달창닫기
  const handleShow=()=>setShow(true)//모달창보여주기

  const handleChangeForm=(event)=>{}

  return (
    <>
    {/* ========================== [[  문의하기 Modal ]] ========================== */}
    <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Q&A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="f_memo">         
          <Form.Group className="mb-3 row" controlId="mTitle">
            <Form.Label className="col-sm-2 col-form-label">제목</Form.Label>
            <div className='col-sm-10'>
            <Form.Control className='form-control form-control-sm' type="text" name="m_title" onChange={handleChangeForm} placeholder="문의 제목을 입력하세요." />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">내용</Form.Label>
            <div className='col-sm-10'>
            <Form.Control maxLength="100" style={{height:'150px'}} as="textarea" rows={3} name="m_writer" onChange={handleChangeForm} className='form-control form-control-sm' placeholder="문의내용을 입력하세요." />
         
            </div>
          </Form.Group>
       
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            문의하기
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 문의하기 Modal ]] ========================== */}    
      <ReviewUI>
        <div className='reviewheader'>
          <h5 style={{fontWeight:'bold'}}  >
            <RiQuestionnaireFill size='30' color='#4996F3'/>
            &nbsp;&nbsp;문의&nbsp;{qcount}</h5>
          &nbsp;&nbsp;
          <button className='qnaButton' onClick={handleShow}>문의하기</button>
        </div>
          
        {/* 리뷰 리스트 */}
        {/* <ul>{reviews&&//데이터가 한건도 없는 경우를 고려
              reviews.map((review)=>(
                <ReviewRow key={review.review_no} review={review}/>
              ))
                }</ul> */}
        {/* 문의 가데이터 */}
        <ul>{qnaData&&//데이터가 한건도 없는 경우를 고려
              qnaData.slice(offset, offset + limit).map((qna)=>(
                <QnaRow key={qnaData.qna_no} qna={qna}/>
              ))
                }</ul> 

        
        <Pagination total={qnaData.length} limit={limit} page={page} setPage={setPage} />
      </ReviewUI>
    </>
  )
}

export default MarketQna
