import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { CustomerService } from "../../styles/SupportStyle";

const csSection = () => {
  return (
    <>
      <CustomerService>
        <section className="csSection">
          <div className="innerStyle">
            <div className="helpDiv">
              <h2 className="helpTitle">무엇을 도와드릴까요?</h2>
              <ul className="helpUl">
                <li className="helpLi">
                  <span className="qMark">
                    Q
                  </span>{" "}
                  결제는 어떻게 취소하나요?
                </li>
                <li className="helpLi">
                  <span className="qMark">
                    Q
                  </span>{" "}
                  비밀번호가 기억나지 않습니다.
                </li>
                <li className="helpLi">
                  <span className="qMark">
                    Q
                  </span>{" "}
                  제품을 더 자세히 알고싶어요.
                </li>
                <li className="helpLi">
                  <span className="qMark">
                    Q
                  </span>{" "}
                  판매자 등록은 얼마나 걸리나요?
                </li>
                <li className="helpLi">
                  <span className="qMark">
                    Q
                  </span>{" "}
                  환불 금액이 입금되지 않습니다.
                </li>
              </ul>
            </div>
            <div className="csDiv">
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
                  <strong>0000-0000</strong>
                </p>
              </div>
              <div>
                <button className="btnContact">1:1 상담하기</button>
                <a href="/"></a>
              </div>
            </div>
          </div>
        </section>
      </CustomerService>
    </>
  );
};

export default csSection;
