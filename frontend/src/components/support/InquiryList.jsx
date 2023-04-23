import React, { useEffect, useState } from "react";
import Footer from "../include/Footer";
import Header from "../include/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import {
  AnswerText,
  InquiryH3,
  InquiryP,
  InquirySection,
  QMark,
  WriteButton,
  WriteButtonContainer,
} from "../../styles/SupportStyle";

const InquiryList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [selected, setSelected] = useState("전체");
  const { category } = useParams();
  useEffect(() => {
    setSelected(category);
  }, [category]);

  const data = [
    {
      id: 1,
      answered: true,
      title: "대충어쩌구 저쩌구인가요?",
      author: "김작성자",
      date: "2023-04-22",
      content: "ㅈㄱㄴ 어쩌구 저쩌구인지 답변부탁드려용",
      answer: "아뇨 저쩌구 저쩌구입니당...",
    },
  ];

  return (
    <>
      <Header />
      <InquirySection>
        <InquiryH3>Q&A</InquiryH3>
        <InquiryP>
          게시판 성격과 맞지 않는 게시글 혹은 부적절한 내용이 포함된 게시글은
          경고없이 삭제될 수 있습니다.
        </InquiryP>
        <WriteButton
          onClick={() => {
            navigate("/support/write");
          }}
        >
          글쓰기
        </WriteButton>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">번호</TableCell>
              <TableCell align="center">답변여부</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">작성자</TableCell>
              <TableCell align="center">등록일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <TableRow onClick={handleClick} style={{ cursor: "pointer" }}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">
                    {item.answered ? "답변완료" : "미답변"}
                  </TableCell>
                  <TableCell align="left">
                    <div className="questionContainer">
                      <QMark>Q</QMark>
                      <span className="questionText">{item.title}</span>
                      <span className="questionDownArrow"></span>
                    </div>
                  </TableCell>
                  <TableCell align="center">{item.author}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <AnswerText className={isOpen ? "show" : ""}>
                      <p className="answerTextP">{item.answer}</p>
                    </AnswerText>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </InquirySection>
      <Footer />
    </>
  );
};

export default InquiryList;
