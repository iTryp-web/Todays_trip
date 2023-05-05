import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { CustomerService, QMark } from "../../styles/SupportStyle";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import ChatBotPage from './ChatBotPage';

const SupportSection = () => {
  const [userId] = useState(window.sessionStorage.getItem("user_id"));
  const [userNickname] = useState(
    window.sessionStorage.getItem("user_nickname")
  );
  const [userRole] = useState(window.sessionStorage.getItem("user_role"));
  const [isModal, setModal] = useState(false);

  const openChat = () => {
    setModal(true)
  }

  const navigate = useNavigate();

  return (
    <>
      <CustomerService>
        <section className="csSection">
          <div className="innerStyle">
            <div
              className="helpDiv"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2 className="helpTitle">무엇을 도와드릴까요?</h2>
              <ul className="helpUl">
                <li className="helpLi">
                  <QMark>Q</QMark> 결제는 어떻게 취소하나요?
                </li>
                <li className="helpLi">
                  <QMark>Q</QMark> 비밀번호가 기억나지 않습니다.
                </li>
                <li className="helpLi">
                  <QMark>Q</QMark> 제품을 더 자세히 알고싶어요.
                </li>
                <li className="helpLi">
                  <QMark>Q</QMark> 판매자 등록은 얼마나 걸리나요?
                </li>
                <li className="helpLi">
                  <QMark>Q</QMark> 환불 금액이 입금되지 않습니다.
                </li>
              </ul>
            </div>
            <div
              className="csDiv"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2 className="csTitle">
                고객센터 <span className="time">09:00 ~ 18:00</span>
              </h2>
              <div className="desc">
                <BsDot />
                평일 : 전체 문의 상담 가능
              </div>
              <div className="desc">
                <BsDot />
                주말/공휴일 : 환불 및 지연에 한해 전화 상담 가능
              </div>
              <div>
                <p className="tel">
                  <span>
                    <AiOutlinePhone />
                  </span>
                  <strong>1544-9970</strong>
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/support/inquiryBoard");
                  }}
                  className="btnContact"
                >
                  1:1 문의하기
                </button>
                <button className="btnContact" style={{marginTop:"5px"}} onClick={openChat}>챗봇 상담하기</button>
                <ChatBotPage isModal={isModal} setModal={setModal} />
                <a href="/"></a>
              </div>
            </div>
          </div>
        </section>
      </CustomerService>
    </>
  );
};

export default SupportSection;
