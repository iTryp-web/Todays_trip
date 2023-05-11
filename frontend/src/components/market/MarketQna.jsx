import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import { qnaInsertDB, qnaListDB } from '../../service/marketLogic';
import { ReviewUI } from '../../styles/MarketStyle'
import Pagination from '../include/Pagination';
import QnaRow from './QnaRow';

const MarketQna = ({mno}) => {
  const navigate=useNavigate();

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
   // 관리자 구분-세션스토리지 꺼내오기
   const [userRole] = useState(window.sessionStorage.getItem('user_role'))
   console.log(userRole)

   // 리프레쉬용 변수
  const [start, setStart] = useState()

  //문의글 갯수
  const [qcount, setQnacount]=useState(0);
  console.log(qcount);
  // 페이지넘기기
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [show, setShow]=useState(false)//모달창초기값
  const handleClose=()=>setShow(false)//모달창닫기
  const handleShow=()=>setShow(true)//모달창보여주기

   // 문의 하기 버튼
  // Form 컴포넌트에서 받아온 제목, 내용을 market 객체에 추가
  const [qnaContent, setQnaContent] = useState('');
  const [qnaTitle, setQnaTitle] = useState('');

    const handleChangeForm=(e)=>{
      const { name, value } = e.target;
        if (name === 'title') {
          setQnaTitle(value);
        } else if (name === 'content') {
          setQnaContent(value);
        }
      }

    // 문의하기 버튼
  const qnaInsert = async (mno) => {
    console.log('qnaInsert 마켓번호 : ' + mno);
    const market = {
      qna_step:0,
      market_no:mno,
      user_id:userId,
      qna_title:qnaTitle,
      qna_content: qnaContent,
      qna_sort:0
    }
    const res = await qnaInsertDB(market)
    console.log('qnaInsert=> ' + res.data);
    setQnaTitle(''); // 입력값 초기화
    setQnaContent(''); // 입력값 초기화
    // setStart(new Date())//리프레쉬용
    window.location.reload('/market/detail/'+mno)
  }
 
   /* 리뷰내용 가져오기 */
  //리뷰 배열
  const [qnas, setQnas]=useState([{}])
  useEffect(()=>{
    const qnaList=async()=>{
      let market = {}  
      // DB로 보내는 조건 
      market = {
        market_no: mno 
      }
      const res = await qnaListDB(market)
      console.log(res.data)
      const list = []
      const datas = res.data
      //datas가 배열이다. 안에 객체있음. forEach로 돌려야된다...item으로 쪼갠다. 그안에 데이터있음
      datas.forEach((item) => {
      // DB에서 받은 데이터
      const obj = {
        qna_no: item.QNA_NO,
        user_nickname: item.USER_NICKNAME,
        market_no:item.MARKET_NO,
        qna_step:item.QNA_STEP,
        qna_title: item.QNA_TITLE,
        qna_content: item.QNA_CONTENT,
        qna_date  : item.QNA_DATE,
        qna_count:item.QNA_COUNT
      }
      list.push(obj)
      setQnacount(item.QNA_COUNT);
    })
    setQnas(list)
    
    console.log(list);

  }
  qnaList()
},[mno,qcount ])
console.log(qnas);
/* <select id="qnaList" parameterType="map" resultType="map">
		SELECT q.qna_no
		, u.user_id
		, u.user_nickname
		, q.market_no
		, q.qna_title
		, q.qna_content
		, q.qna_date
		FROM TB_QNA q, TB_USER u
		WHERE q.user_id = u.user_id
		<if test='search != null and search.equals("작성자")'>
			AND u.user_nickname LIKE '%'||#{keyword}||'%'
		</if>
		<if test='search != null and search.equals("제목")'>
			AND q.qna_title LIKE '%'||#{keyword}||'%'
		</if>
		<if test='search != null and search.equals("내용")'>
			AND q.qna_content LIKE '%'||#{keyword}||'%'
		</if>
		ORDER BY q.qna_no ASC
	</select> */

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
            <Form.Control className='form-control form-control-sm' type="text" name="title" onChange={handleChangeForm} placeholder="문의 제목을 입력하세요." />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">내용</Form.Label>
            <div className='col-sm-10'>
            <Form.Control maxLength="100" style={{height:'150px'}} as="textarea" rows={3} name="content" onChange={handleChangeForm} className='form-control form-control-sm' placeholder="문의내용을 입력하세요." />
         
            </div>
          </Form.Group>
       
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={()=>{handleClose(); qnaInsert(mno)}}>
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
          {/* { userRole==2?  */}
            {/* <button className='qnaButton' onClick={handleShow}>문의답글</button>: */}
               <button className='qnaButton' onClick={handleShow}>문의하기</button>
               {/* } */}
         
        </div>
          
        {/* 문의 리스트 */}
         <ul>{qnas&&//데이터가 한건도 없는 경우를 고려
              qnas.slice(offset, offset + limit).map((qna)=>(
                <QnaRow key={qna.qna_no} qna={qna}/>
              ))}
          </ul>

        
        <Pagination total={qnas.length} limit={limit} page={page} setPage={setPage} />
      </ReviewUI>
    </>
  )
}

export default MarketQna
