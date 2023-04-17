import React from "react";
import {
  QMark,
  QlButton,
  QlH3,
  QlLi,
  QlSection,
  QlUl,
} from "../../styles/SupportStyle";

const QuestionSection = () => {
  return (
    <>
      <QlSection>
        <QlUl>
          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">주문 내역은 어떻게 확인할 수 있나요?</span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">주문 내역은 어떻게 확인할 수 있나요?</span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">주문 내역은 어떻게 확인할 수 있나요?</span>
              </QlButton>
              <QlButton>
                <QMark>Q</QMark>
                <span className="questionText">주문 내역은 어떻게 확인할 수 있나요?</span>
              </QlButton>
            </QlH3>
          </QlLi>
        </QlUl>
      </QlSection>
    </>
  );
};

export default QuestionSection;
