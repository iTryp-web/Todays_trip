import React, { useCallback, useRef, useState } from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SQuillEditor from "./SQuillEditor";
import { boardInsertDB } from "../../service/boardLogic";
import { InqDiv, InquirySection } from "../../styles/SupportStyle";

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

  const boardInsert = async () => {
    console.log("boardInsert");
    console.log(files);
    const board = {
      user_id: sessionStorage.getItem("user_id"),
      board_title: title,
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
              boardInsert();
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
