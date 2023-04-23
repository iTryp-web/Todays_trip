import React, { useState } from 'react'
import { BsBookmarkStar, BsBookmarkStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { RiQuestionAnswerFill, RiQuestionAnswerLine } from 'react-icons/ri';
import { TbLetterA, TbLetterQ } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { qnaDeleteDB } from '../../service/marketLogic';
import { ModalDiv, ModalUl } from '../../styles/BoardStyle';
import { BtnDot, PostContent, PostFooter, PostLi } from '../../styles/MarketStyle';
import { qnaData } from './MarketData';


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
  

  return (
    <div>

      <PostLi>
      <PostContent >
        <div>
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

          <p className='titleP'>
            {qna.qna_title}
          </p>
       
          
          
          <p className='contentP'>
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
          
          <p className='contentP'>
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
