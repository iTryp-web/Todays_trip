import React from "react";
import {
  QMark,
  QlButton,
  QlH3,
  QlLi,
  QlSection,
  QlUl,
} from "../../styles/SupportStyle";
import { BsChevronDown } from "react-icons/bs";

const arrow = document.querySelector('.questionDownArrow');

arrow.addEventListener('click', () => {
  arrow.classList.toggle('rotate');
});

const QuestionSection = () => {
  return (
    <>
      <QlSection>
        <QlUl>
          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">
                  주문 내역은 어떻게 확인할 수 있나요?
                </span>
                <span className="questionDownArrow">
                  <BsChevronDown />
                </span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">
                  환불 요청이 페이지가 다음 화면으로 넘어가지 않을 땐 어떻게 해야하나요?
                </span>
                <span className="questionDownArrow">
                  <BsChevronDown />
                </span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">여행지 권고사항은 어디서 확인하나요?</span>
                <span className="questionDownArrow">
                  <BsChevronDown />
                </span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">
                  정부 방역정책으로 취소된 여정의 보상금은 어떻게 수령하나요?
                </span>
                <span className="questionDownArrow">
                  <BsChevronDown />
                </span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">
                  인기 게시글의 기준은 무엇인가요?
                </span>
                <span className="questionDownArrow">
                  <BsChevronDown />
                </span>
              </QlButton>
            </QlH3>
          </QlLi>
        </QlUl>
      </QlSection>
    </>
  );
};

export default QuestionSection;
