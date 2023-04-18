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

const QuestionSection = () => {
  const [faqPosts, setFaqPosts] = useState([{}]);
  useEffect(() => {
    setFaqPosts(faqPost);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <QlSection>
        <QlUl>
          {faqPosts &&
            faqPosts.map((post) => {
              <QlLi key={post.fboard_no}>
                <QlH3>
                  <QlButton onClick={handleClick}>
                    <QMark>Q</QMark>
                    <div className={`qlConatiner ${isOpen ? "open" : ""}`}>
                      <span className={`questionText ${isOpen ? "open" : ""}`}>
                        {post.fboard_title}
                      </span>
                      <span
                        className={`questionDownArrow ${isOpen ? "open" : ""}`}
                      >
                        <BsChevronDown />
                      </span>
                    </div>
                  </QlButton>
                </QlH3>
                <AnswerText className={isOpen ? "show" : ""}>
                  <p className="answerTextP">
                    {post.fboard_content}
                  </p>
                </AnswerText>
              </QlLi>;
            })}
        </QlUl>
      </QlSection>
    </>
  );
};

export default QuestionSection;
