import React, { useCallback, useRef, useState } from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SQuillEditor from "./SQuillEditor";
import { boardInsertDB } from "../../service/boardLogic";
import {
  InqDiv,
  InquiryH3,
  InquiryP,
  InquirySection,
} from "../../styles/SupportStyle";
import { BsDot } from "react-icons/bs";

const InquiryWriteForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const quillRef = useRef();

  const handleTitle = useCallback((e) => {
    console.log(e);
    setTitle(e);
  }, []);

  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  }, []);

  const handleFiles = useCallback(
    (value) => {
      console.log(value);
      setFiles([...files, value]); // 깊은복사
    },
    [files]
  );

  const inquiryInsert = async () => {
    console.log("boardInsert");
    console.log(files);
    const board = {
      user_id: sessionStorage.getItem("user_id"),
      inquiry_title: title,
      board_content: content,
      imageNames: files,
    };
    const res = await boardInsertDB(board);
    console.log(res.data);
    navigate("/board/all");
  };

  return (
    <>
      <Header />
      <InquirySection>
        <InquiryH3>1대1 문의</InquiryH3>
        <InquiryP>
          <BsDot />{" "}
          문의 답변은 최대 3일까지 소요될 수 있습니다.
          <br />
          <BsDot />{" "}
          1대1 문의로 작성된 글은 관리자와 작성자 이외에는 열람할 수 없습니다. 작성한 글은 마이페이지에서 작성한 글 목록에서 확인하실 수 있습니다.

        </InquiryP>
        <InqDiv>
          <input
            type="text"
            id="board_title"
            maxLength="60"
            placeholder="문의 글 제목을 작성해주세요"
            autoComplete="off"
            onChange={(e) => {
              handleTitle(e.target.value);
            }}
          />
          <button
            className="btnInsert"
            onClick={(e) => {
              inquiryInsert();
            }}
          >
            등록
          </button>
        </InqDiv>
        <SQuillEditor
          value={content}
          handleContent={handleContent}
          quillRef={quillRef}
          files={files}
          handleFiles={handleFiles}
        />
      </InquirySection>
      <Footer />
    </>
  );
};

export default InquiryWriteForm;
