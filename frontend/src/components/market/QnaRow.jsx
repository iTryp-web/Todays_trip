import React, { useState } from 'react'
import { BsArrowReturnRight, BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { RiQuestionAnswerFill, RiQuestionAnswerLine } from 'react-icons/ri';
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
const Arrow=styled.span`
  // display :flex;
`
const QnaRow = ({qna}) => {
  const navigate=useNavigate();
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  // const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const userNickname = '물음표살인마'

  /* qna Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };

  // qna글 삭제 버튼
  const qnaDelete = async () => {
    console.log('qnaDelete' + qna.qna_no);
    const qna = {
      qna_no: qna.qna_no,
    }
    const res = await qnaDeleteDB(qna)
    console.log('qnaDelete=> ' + res.data);
    navigate('/market/detail')
  }
  
  /* 버튼이 열리고 닫히는 상태에 대한 useState 기본값 false */
  /* 기본적으로 유저가 누르기전에는 닫혀있으므로 false값을 줌 */
  const [isOpen, setIsOpen] = useState(false);

  /* handleClick이 호출되면 isOpen의 상태가 true <-> false로 왔다갔다함 */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

      <PostLi>
      <PostContent>
        {qna.qna_step === 1 ? (

                    <ReplyIcon>
                    <BsArrowReturnRight/>
                    </ReplyIcon>
                 
                  ) : (
                    null
                    )}
        <div className='qna2'>
        
          <div className='qnaTspace'>
            {qna.qna_step === 0 ? (
                <TbLetterQ className='letterIcon' color={'#4996F3'}/>
                  
                ) : qna.qna_step === 1 ? (

                  <TbLetterA className='letterIcon' color={'#4996F3'} />
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
       
          
          {/* 수정된 부분 */}
          {/* contentP2를 선언 */}
          {/* isOpen이 true일 때 contentP2가 펼쳐짐(show) */}
          <p className={`contentP2 ${isOpen ? "show" : ""}`}>
            {userNickname && (
              <BtnDot onClick={() => onClickBtnDot()}>
                <BsThreeDotsVertical />
              </BtnDot>
            )}
            {is_ClickBtnDot ? (
              userNickname === qna.user_nickname ? (
                <ModalDiv>
                  <ModalUl onClick={qnaDelete}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null}
          </p>
          {/* isOpen이 true일 때 qna_content를 볼 수 있음(visible) */}
          <p className={`contentP2 ${isOpen ? "visible" : ""}`}>
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
    </div>
  )
}

export default QnaRow
