import React, { useEffect, useState } from "react";
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
import { faqPost } from "./QuestionData";
import { useParams } from "react-router-dom";

const QuestionSection = () => {
  let {fPost} = useParams()
  console.log(fPost);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <QlSection>
        <QlUl>
          {faqPost&& faqPost.map((fPost))}
          <QlLi key={fPost.fboard_no}>
            <QlH3>
              <QlButton onClick={handleClick}>
                <QMark>Q</QMark>
                <div className={`qlConatiner ${isOpen ? "open" : ""}`}>
                  <span className={`questionText ${isOpen ? "open" : ""}`}>
                    {fPost.fboard_title}
                  </span>
                  <span className={`questionDownArrow ${isOpen ? "open" : ""}`}>
                    <BsChevronDown />
                  </span>
                </div>
              </QlButton>
            </QlH3>
            <AnswerText className={isOpen ? "show" : ""}>
              <p className="answerTextP">
                {fPost.fboard_content}
              </p>
            </AnswerText>
          </QlLi>
        </QlUl>
      </QlSection>
    </>
  );
};

export default QuestionSection;
