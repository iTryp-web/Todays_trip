import React, { useState } from 'react'
import { BsArrowReturnRight, BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Button, Form, Modal } from 'react-bootstrap';
import { TbLetterA, TbLetterQ } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { qnaDeleteDB } from '../../service/marketLogic';
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
  const navigate=useNavigate();
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))


  /* qna Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(null);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
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

  return (
    
    <>
      
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
            {qna.qna_step === 0 ? (
                <TbLetterQ className='letterIcon' />
                  
                ) : qna.qna_step === 1 ? (

                  <TbLetterA className='letterIcon'  />
                  ) : (
                    null
                    )}
            &nbsp;{qna.qna_no}
            &nbsp;&nbsp;{qna.user_nickname}

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
            {is_ClickBtnDot ? (
              userNickname === qna.user_nickname ? (
                <ModalDiv>
                  <ModalUl onClick={handleShowDelete}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null}
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
