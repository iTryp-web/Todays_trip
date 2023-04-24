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
import { useParams } from "react-router-dom";
import { faqPost } from "./QuestionData";

const QuestionSection = () => {
  /* 카테고리 선택할 때, 해당 카테고리의 글만 가져오기 위한 useState*/ 
  /* selected로 판별 */
  const [selected, setSelected] = useState("전체");
  const {category} = useParams()
  useEffect(()=>{
    setSelected(category)
  },[category])
  return (
    <>
      <QlSection>
        <QlUl>
          {faqPost.map((post) =>
            post.category == selected ? (
              <Question key={post.fboard_no} post={post} />
            ) : selected == "all" ? (
              <Question key={post.fboard_no} post={post} />
            ) : null
          )}
        </QlUl>
      </QlSection>
    </>
  );
};

/* Li요소들에 title과 content를 삽입해주기 위한 컴포넌트 Map을 돌며 값 삽입 */
const Question = ({ post }) => {
  /* 버튼이 열리고 닫히는 상태에 대한 useState 기본값 false */
  const [isOpen, setIsOpen] = useState(false);

  /* handleClick이 호출되면 isOpen의 상태가 true:false로 스위칭 */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QlLi>
      <QlH3>
        {/* handleClick 호출 시 isOpen값 변경됨 */}
        <QlButton onClick={handleClick}>
          <QMark>Q</QMark>
          <div className={`qlConatiner ${isOpen ? "open" : ""}`}>
            <span className={`questionText ${isOpen ? "open" : ""}`}>
              {post.fboard_title}
            </span>
            {/* isOpen이 true */}
            <span className={`questionDownArrow ${isOpen ? "open" : ""}`}>
              <BsChevronDown />
            </span>
          </div>
        </QlButton>
      </QlH3>
      <AnswerText className={isOpen ? "show" : ""}>
        <p className="answerTextP">{post.fboard_content}</p>
      </AnswerText>
    </QlLi>
  );
};

export default QuestionSection;