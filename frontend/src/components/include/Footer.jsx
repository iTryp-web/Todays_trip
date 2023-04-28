import React from 'react'
import { FooterComponent, Wrapper ,LeftRow, RightRow, CenterRow, FooterSns } from '../../styles/FooterStyle';
import { FcNext } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ModalWrapper } from '../../styles/SignStyle';
import { IoClose } from 'react-icons/io5';
import Term1 from '../Term/Term1';
import Term2 from '../Term/Term2';

const Footer = () => {
  const navigate = useNavigate()

  const toSupport = () => {
    navigate('/support/all')
  }

  const toQna = () => {
    navigate('/support/inquiryBoard')
  }

  // 이용약관, 개인정보처리방침 모달
  const [isM1Open, setIsM1Open] = useState(false)
  const [isM2Open, setIsM2Open] = useState(false)

  return (
    <>
      <FooterComponent>
        <Wrapper>
          <LeftRow>
            <div className="footer-content">
            <a className='support' onClick={() => toSupport()}>
              고객센터
              <FcNext className="icon" />
            </a>
              <p className="contact">1544-9970</p>
              <p className="hour">09:00 - 19:00</p>
              <p>평일: 전체 문의 상담 가능</p>
              <p className="bottom-text">주말, 공휴일: 오늘의여행 직접배송 문의 상담 가능</p>
            </div>
          </LeftRow>

          <CenterRow>
            <div onClick={() => toQna()}>
              입점신청
            </div>
            <div onClick={() => toQna()}>
              파트너 문의
            </div>
            <div onClick={() => toQna()}>
              제휴/광고 문의
            </div>
            <div onClick={() => toSupport()}>
              자주묻는질문
            </div>
            <div onClick={() => toQna()}>
              고객의 소리
            </div>
          </CenterRow>

          <RightRow>
            <div>
              <div>
              <ModalWrapper isOpen={isM1Open} ariaHideApp={false}>
                <button className="mbutton4" onClick={() => setIsM1Open(!isM1Open)}>
                  <IoClose />
                </button>
                <Term1 />
              </ModalWrapper>
              <ModalWrapper isOpen={isM2Open} ariaHideApp={false}>
                <button className="mbutton4" onClick={() => setIsM2Open(!isM2Open)}>
                  <IoClose />
                </button>
                <Term2 />
              </ModalWrapper>

                <span className="footer-links" onClick={() => setIsM1Open(!isM1Open)}>이용악관</span>
                <span className="footer-links" onClick={() => setIsM2Open(!isM2Open)}>개인정보처리방침</span>
                <a className="footer-links" target="_blank"  href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8518700622'>사업자 정보확인</a>
              </div>
              <small className="info">
                (주)오늘의여행은 통신판매중개자로서 통신판매의 당사자가 아니며
                개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한
                의무와 책임은 거래당사자에게 있습니다.
              </small>
              <address>
                <small>
                  상호명:(주)오늘의여행 · 대표이사:김오행 ·
                  개인정보책임관리자:김오행 · 주소:서울특별시 강남구 테헤란로10길 9,
                  그랑프리 빌딩 7F
                </small>
                <small>
                  사업자등록번호:851-87-00622 · 통신판매업신고증:제2018-서울강남-03994호
                </small>
                <small>고객센터:1544-9970 · 이메일:bamboogitmaster@gmail.com</small>
              </address>
              <small>
                Copyright &copy;Today's Trip Inc. All Rights Reserved.
              </small>
            </div>
              <FooterSns>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/jungyunmok"
                >
                  <img
                    src="/images/footer/sns-facebook.svg"
                    alt="오행 페이스북 계정"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/77EJ77"
                >
                  <img
                    src="/images/footer/sns-instagram.svg"
                    alt="오행 인스타그램"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/cvrts"
                >
                  <img 
                    src="/images/footer/sns-naverblog.svg" 
                    alt="오행 블로그" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Yanggang95"
                >
                  <img 
                    src="/images/footer/sns-naverpost.svg" 
                    alt="오행 포스트" />
                </a>
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://github.com/dodoringring">
                  <img 
                    src="/images/footer/sns-tistory.svg" 
                    alt="오행 스토리" />
              </a>
            </FooterSns>
          </RightRow>
        </Wrapper>
      </FooterComponent>
    </>
  )
}

export default Footer
