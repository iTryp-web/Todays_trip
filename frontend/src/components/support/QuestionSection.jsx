import React, { useState } from "react";
import {
  AnswerText,
  QMark,
  QlButton,
  QlH3,
  QlLi,
  QlSection,
  QlUl,
} from "../../styles/SupportStyle";
import { BsChevronDown } from "react-icons/bs";

const QuestionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <QlSection>
        <QlUl>
          <QlLi>
            <QlH3>
              <QlButton onClick={handleClick}>
                <QMark>Q</QMark>
                <div className={`qlConatiner ${isOpen ? "open" : ""}`}>
                  <span className={`questionText ${isOpen ? "open" : ""}`}>
                    주문 내역은 어떻게 확인할 수 있나요?
                  </span>
                  <span className={`questionDownArrow ${isOpen ? "open" : ""}`}>
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
            <AnswerText className={isOpen ? "show" : ""}>
              <p>
                우측 상단 프로필 사진을 클릭 후 [나의쇼핑]을 통해 확인
                가능합니다.
              </p>
            </AnswerText>
          </QlLi>
          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <div className="qlConatiner">
                  <span className="questionText">
                    환불 요청이 페이지가 다음 화면으로 넘어가지 않을 땐 어떻게
                    해야하나요?
                  </span>
                  <span className="questionDownArrow">
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
          </QlLi>
          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <div className="qlConatiner">
                  <span className="questionText">
                    여행지 권고사항은 어디서 확인하나요?
                  </span>
                  <span className="questionDownArrow">
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
          </QlLi>

          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <div className="qlConatiner">
                  <span className="questionText">
                    정부 방역정책으로 취소된 여정의 보상금은 어떻게 수령하나요?
                  </span>
                  <span className="questionDownArrow">
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
          </QlLi>
          <QlLi>
            <QlH3>
              <QlButton>
                <QMark>Q</QMark>
                <div className="qlConatiner">
                  <span className="questionText">
                    인기 게시글의 기준은 무엇인가요?
                  </span>
                  <span className="questionDownArrow">
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
          </QlLi>
        </QlUl>
      </QlSection>
    </>
  );
};

export default QuestionSection;
