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

  /* 검색 */
  // 선택한 검색 조건
  const [searchVal, setSearchVal] = useState("작성자");
  // 입력한 검색값
  const [keyword, setKeyword] = useState("");
  // 검색조건 입력
  const handleSearch = useCallback((e) => {
    console.log("handleSearch => " + e);
    setSearchVal(e);
  }, []);
  // 검색값 입력
  const handleSearchKeyword = useCallback((e) => {
    console.log("handleSearchKeyword => " + e);
    setKeyword(e);
  }, []);
  // useEffect쓰기위해 useState선언
  const [searchStart, setSearchStart] = useState("");

  // 검색 버튼 클릭
  const btnSearch = useCallback((e) => {
    e.preventDefault();
    setSearchStart(new Date());
  }, []);

  /* 글 목록 */
  // 게시글 담을 객체배열
  const [posts, setPosts] = useState([{}]);
  //선택한 카테고리에따라 글목록 출력
  const removeTag = (content) => {
    if(content) {
      const newText = content.replace(/(<([^>]+)>)/gi,'');
      console.log(newText)
      return newText
    }
  }
  useEffect(() => {
    console.log(searchStart);
    const inquiryList = async () => {
      let inquiry = {};
      // DB로 보내는 조건 - 검색버튼 눌렀을때만 조건추가
      inquiry = {
        search: searchVal,
        keyword: keyword,
      };
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
          file_exist: item.FILE_EXIST,
        };
        console.log(obj.file_exist);
        list.push(obj);
      });
      setPosts(list);
      setKeyword(""); // 키워드 초기화
      // const keywordInput = document.getElementById("keyword");
      // keywordInput.value = ""; // 키워드 input창 초기화
    };
    inquiryList();
  }, [selected, searchStart]);

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
                <TableRow onClick={handleClick} style={{ cursor: "pointer" }}>
                  <TableCell align="center">{item.qna_no}</TableCell>
                  <TableCell align="left">
                    <div className="questionContainer">
                      <span className="questionText">{item.qna_title}</span>
                    </div>
                  </TableCell>
                  <TableCell align="center">{item.user_id}</TableCell>
                  <TableCell align="center">{item.qna_date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>
                    <AnswerText className={isOpen ? "show" : ""}>
                      <p className="answerTextP">{removeTag(item.qna_content)}</p>
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
