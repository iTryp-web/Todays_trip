import React, { useState } from 'react'
import { BsArrowReturnRight, BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Button, Form, Modal } from 'react-bootstrap';
import { TbLetterA, TbLetterQ } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { qnaDeleteDB, qnaInsertDB } from '../../service/marketLogic';
import { ModalDiv, ModalUl } from '../../styles/BoardStyle';
import { BtnDot, PostContent, PostFooter, PostLi } from '../../styles/MarketStyle';
import { qnaData } from './MarketData';

 const ReplyIcon = styled.div`
  display: flex;
  font-size: 17px;
  margin: 10px;
  color: #4996F3;
`

const QnaRow = ({qna}) => {
  console.log(qna)
  const navigate=useNavigate();
  // 아이디,닉네임, 역할-세션스토리지 꺼내오기
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
   const [userRole] = useState(window.sessionStorage.getItem('user_role'))
   console.log(userRole)



  /* qna Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(null);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
   
    // if (userNickname == qna.user_nickname) {
    //   setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
    // } else {
    //   setClickBtnDot(null)
    // }
 
  };

  // qna글 삭제 버튼
  const qnaDelete = async (mno, qno) => {
    console.log('qnaDelete' + qno);
    const market = {
      qna_no: qno,
      market_no:mno
    }
    const res = await qnaDeleteDB(market)
    console.log('qnaDelete=> ' + res.data);
    navigate('/market/detail/'+mno)
  }
  
  /* 버튼이 열리고 닫히는 상태에 대한 useState 기본값 false */
  const [isOpen, setIsOpen] = useState(false);

  /* handleClick이 호출되면 isOpen의 상태가 true <-> false로 왔다갔다함 */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [Dshow, setDShow]=useState(false)//삭제모달창초기값
  const DhandleClose=()=>setDShow(false)//삭제모달창닫기
  const handleShowDelete=()=>setDShow(true)//삭제모달창보여주기

  const [show, setShow]=useState(false)//답글모달창초기값
  const handleClose=()=>setShow(false)//답글모달창닫기
  const handleShow=()=>setShow(true)//답글모달창보여주기
  // 문의 답글 버튼
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
   /* 문의답글쓰기 */
   const qnaInsert = async (mno, qno) => {
    console.log('qnaInsert 마켓번호 : ' + mno);
    const market = {
      qna_no:qno,
      qna_step:1,
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

  return (
    
    <>
    {/* ========================== [[  문의답글 Modal ]] ========================== */}
    <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Q&A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="f_memo">         
          <Form.Group className="mb-3 row" controlId="mTitle">
            <Form.Label className="col-sm-2 col-form-label">제목</Form.Label>
            <div className='col-sm-10'>
            <Form.Control className='form-control form-control-sm' type="text" name="title" onChange={handleChangeForm} placeholder="답변 제목을 입력하세요." />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">내용</Form.Label>
            <div className='col-sm-10'>
            <Form.Control maxLength="100" style={{height:'150px'}} as="textarea" rows={3} name="content" onChange={handleChangeForm} className='form-control form-control-sm' placeholder="답변내용을 입력하세요." />
         
            </div>
          </Form.Group>
       
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={()=>{handleClose(); qnaInsert(qna.market_no, qna.qna_no)}}>
            문의답글
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 문의답글 Modal ]] ========================== */}    
    {/* ========================== [[ 삭제하기 Modal ]] ========================== */}
    <Modal show={Dshow} onHide={DhandleClose} animation={true}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        삭제하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={DhandleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={()=>{DhandleClose(); qnaDelete(qna.market_no, qna.qna_no);}}>
            삭제하기
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 삭제하기 Modal ]] =========================>*/}
      <PostLi>
      <PostContent>
        {qna.qna_step === 1 ? (

                    <ReplyIcon>
                    <BsArrowReturnRight/>
                    </ReplyIcon>
                 
                  ) : (
                    null
                    )}
        <div className='QNA'>
        
          <div className='qnaTspace'>
            {qna.qna_step === 0 || qna.qna_step === 2 ? (
                <TbLetterQ className='letterIcon' />
                  
                ) : qna.qna_step === 1 ? (

                  <TbLetterA className='letterIcon'  />
                  ) : (
                    null
                    )}
            &nbsp;{qna.qna_step === 0 || qna.qna_step === 2 ? (qna.user_nickname) : ('관리자')}

          </div>
          {/* titleP가 click되면 handleClick이 호출됨 */}
          <p className='titleP'onClick={handleClick} >
            {qna.qna_title}
          </p>
    
          <p >
            {userNickname && (
              <BtnDot onClick={() => onClickBtnDot()}>
                <BsThreeDotsVertical />
              </BtnDot>
            )}
            {/* {is_ClickBtnDot ? (
              userNickname === qna.user_nickname ? (
                <ModalDiv>
                  <ModalUl onClick={handleShowDelete}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null} */}
            {userRole==2?(
              is_ClickBtnDot ?(
               <ModalDiv>
               <ModalUl onClick={handleShowDelete}>삭제하기</ModalUl>
               <ModalUl onClick={handleShow}>문의답글</ModalUl>
               </ModalDiv>):null
               ):
            (is_ClickBtnDot ? (
              userNickname === qna.user_nickname ? (
                <ModalDiv>
                  <ModalUl onClick={handleShowDelete}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null)
            }
          </p>
          {/* isOpen이 true일 때 qna_content를 볼 수 있음(visible) */}
          <p className={`contentP2 ${isOpen ? "visible" : "invisible"}`}>
            {qna.qna_content}
          </p>
        </div>
    
      </PostContent>
      <PostFooter>
      <li>

      </li>
          <small>
                {new Date(qna.qna_date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
          </small>
      
                </PostFooter>
    </PostLi>
    </>
  )
}

export default QnaRow
