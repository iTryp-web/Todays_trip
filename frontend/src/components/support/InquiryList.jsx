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
  InquiryHeader,
  InquiryP,
  InquirySection,
  QMark,
  WriteButton,
} from "../../styles/SupportStyle";
import { InquiryListDB } from "../../service/supportLogic";
import { useCallback } from "react";
import { AiFillLock } from "react-icons/ai";

const InquiryList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const managerChecker = (thisUserRole) => {
    if (thisUserRole === 4) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (user_id, qna_no, isLocked) => {
    const storedUserId = sessionStorage.getItem("user_id");
    if (isLocked) {
      if (user_id === storedUserId) {
        setIsOpen((prevState) => {
          const newState = { ...prevState };
          newState[qna_no] = !newState[qna_no];
          return newState;
        });
      } else {
        alert("비밀글입니다.");
      }
    } else {
      setIsOpen((prevState) => {
        const newState = { ...prevState };
        newState[qna_no] = !newState[qna_no];
        return newState;
      });
    }
  };

  const handleComment = (qna_no) =>{
    if(sessionStorage.getItem("user_role")){
      console.log(qna_no +"문의답변 호출")
    }else{
      console.log("잘못된 접근입니다. 관리자계정으로 접근할 것.")
    }
  }

  /* 글 목록 */
  // 게시글 담을 객체배열
  const [posts, setPosts] = useState([{}]);

  // cotent의 <p>태그 삭제하기 위한 함수
  const removeTag = (content) => {
    if (content) {
      const newText = content.replace(/(<([^>]+)>)/gi, "");
      console.log(newText);
      return newText;
    }
  };

  useEffect(() => {
    const inquiryList = async () => {
      let inquiry = {};
      const res = await InquiryListDB(inquiry);
      console.log(res.data);
      const list = [];
      const datas = res.data;
      datas.forEach((item) => {
        console.log(item);
        // DB에서 받은 데이터
        const obj = {
          qna_no: item.QNA_NO,
          user_id: item.USER_ID,
          qna_title: item.QNA_TITLE,
          qna_content: item.QNA_CONTENT,
          qna_date: item.QNA_DATE,
          qna_sort: item.QNA_SORT,
          file_exist: item.FILE_EXIST,
        };
        console.log(obj.file_exist);
        list.push(obj);
      });
      setPosts(list);
    };
    inquiryList();
  }, []);

  return (
    <>
      <Header />
      <InquirySection>
        <InquiryHeader>
          <InquiryH3>Q&A</InquiryH3>
          <WriteButton
            onClick={() => {
              navigate("/support/write");
            }}
          >
            문의하기
          </WriteButton>
        </InquiryHeader>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">번호</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">작성자</TableCell>
              <TableCell align="center">등록일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((item) => (
              <React.Fragment key={item.qna_no}>
                <TableRow>
                  <TableCell align="center">{item.qna_no}</TableCell>
                  <TableCell align="left">
                    <div className="questionContainer">
                      {item.qna_sort === 4 && <span>{AiFillLock}</span>}
                      <span
                        className="questionText"
                        onClick={() =>
                          handleClick(
                            item.user_id,
                            item.qna_no,
                            item.qna_sort === 4
                          )
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {item.qna_title}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="center">{item.user_id}</TableCell>
                  <TableCell align="center">{item.qna_date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>
                    <AnswerText className={isOpen[item.qna_no] ? "show" : ""} onClick={handleComment(item.qna_no)}>
                      <p className="answerTextP" style={{ cursor: "pointer" }} >
                        {removeTag(item.qna_content)}
                      </p>
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