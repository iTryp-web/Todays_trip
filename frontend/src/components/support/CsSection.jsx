import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { CustomerService } from "../../styles/SupportStyle";

const csSection = () => {
  return (
    <>
      <CustomerService class="">
        <section className="sectionStyle">
          <div className="innerStyle"></div>

          <div className="sectStyle">
            <div>
              <h2></h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="csDivStyle">
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
        </section>
      </CustomerService>
    </>
  );
};

export default csSection;
