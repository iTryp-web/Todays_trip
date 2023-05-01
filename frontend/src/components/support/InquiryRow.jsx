import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  AnswerComplete,
  AnswerInput,
  AnswerText,
} from "../../styles/SupportStyle";
import { TableCell, TableRow } from "@material-ui/core";
import { AiFillLock } from "react-icons/ai";
import Toast from "../include/Toast";
import { setToastMsg } from "../../redux/toastStatus/action";
import { useDispatch, useSelector } from "react-redux";
import {
  InquiryUpdateDB,
  answerInsertDB,
  inquiryInsertDB,
} from "../../service/supportLogic";
import { BtnCommentInsert, CommentInput } from "../../styles/BoardStyle";

const InquiryRow = ({ qna, qnaList, setStart }) => {
  const navigate = useNavigate();
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const status = useSelector((store) => store.toastStatus.status);

  const answerInsert = async () => {
    console.log("answerInsert");
    const inquiry = {
      user_id: sessionStorage.getItem("user_id"),
      qna_title: qna.qna_no + "번 답변",
      qna_content: answer,
      qna_step: 1,
      qna_sort: qna.qna_sort,
      qna_no: qna.qna_no,
    };
    const res = await answerInsertDB(inquiry);
    console.log(res.data);
    const res2 = await stepUpdate();
    setStart(new Date());
  };

  const stepUpdate = async () => {
    console.log(qna.qna_no);
    console.log(qna.qna_step);
    console.log(qna.qna_sort);
    const inquiry = {
      qna_no: qna.qna_no,
      qna_title: qna.qna_title,
      qna_content: qna.qna_content,
      qna_step: 2,
      qna_sort: qna.qna_sort,
    };
    const res = await InquiryUpdateDB(inquiry);
    if (!res.data) return console.log("inquiryUpdate 실패");
    navigate("/support/inquiryBoard");
  };

  const dispatch = useDispatch();
  const [show, setShow] = useState(false); //모달창초기값
  const handleClose = () => setShow(false); //모달창닫기
  const handleShow = () => setShow(true); //모달창보여주기
  /* 버튼이 열리고 닫히는 상태에 대한 useState 기본값 false */
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (user_id, qna_no, isLocked) => {
    const storedUserId = sessionStorage.getItem("user_id");
    const storedRole = sessionStorage.getItem("user_role");
    if (isLocked) {
      if (user_id === storedUserId || storedRole == 2) {
        setIsOpen((prevState) => {
          const newState = { ...prevState };
          newState[qna_no] = !newState[qna_no];
          return newState;
        });
      } else {
        dispatch(setToastMsg("비밀글입니다."));
      }
    } else {
      setIsOpen((prevState) => {
        const newState = { ...prevState };
        newState[qna_no] = !newState[qna_no];
        return newState;
      });
    }
  };
  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    // TODO: 폼 데이터 처리
  };
  const hideChars = (str) => {
    const visibleChars = str.substring(0, 3);
    const hiddenChars = "*****";
    return visibleChars + hiddenChars;
  };
  const [answer, setAnswer] = useState("");
  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e);
  };
  const removeTag = (content) => {
    if (content) {
      const newText = content.replace(/(<([^>]+)>)/gi, "");
      console.log(newText);
      return newText;
    }
  };

  const filteredData = qnaList.filter((QNA) => {
    return QNA.qna_no === qna.qna_no && QNA.qna_step === 1;
  });

  return (
    <>
      {status && <Toast />}
      {qna.qna_step === 1 ? null : (
        <TableRow>
          <TableCell align="center">{qna.qna_no}</TableCell>
          <TableCell align="left">
            <div className="questionContainer">
              <span
                className="questionText"
                onClick={() =>
                  handleClick(qna.user_id, qna.qna_no, qna.qna_sort == 4)
                }
                style={{ cursor: "pointer" }}
              >
                {qna.qna_sort === 4 ? <AiFillLock /> : null}
                {qna.qna_sort === 3 ? (
                  <AnswerComplete>[탈퇴]</AnswerComplete>
                ) : null}
                {qna.qna_step === 2 ? (
                  <AnswerComplete>[답변완료]</AnswerComplete>
                ) : null}
                {qna.qna_sort === 3 || 4 ? "비밀 문의글입니다." : qna.qna_title}
              </span>
            </div>
          </TableCell>
          <TableCell align="center">{hideChars(qna.user_id)}</TableCell>
          <TableCell align="center">{qna.qna_date}</TableCell>
        </TableRow>
      )}

      {qna.qna_step === 1 ? null : (
        <TableRow>
          <TableCell  style={{padding: "7px"}} colSpan={4}>
            <AnswerText className={isOpen[qna.qna_no] ? "show" : ""}>
              {/* isOpen이 true일 때 qna_content를 볼 수 있음(visible) */}
              <p
                className="answerTextP"
                style={{
                  cursor:
                    sessionStorage.getItem("user_role") === 2 ? "pointer" : "",
                }}
              >
                {removeTag(qna.qna_content)}
              </p>
              {qna.qna_step === 0 ? (
                sessionStorage.getItem("user_role") == 2 ? (
                  <div>
                    <AnswerInput
                      placeholder="답변을 남길 수 있습니다."
                      onChange={(e) => {
                        handleAnswer(e.target.value);
                      }}
                      maxLength={500}
                    />
                    {answer ? (
                      <BtnCommentInsert onClick={() => answerInsert()}>
                        등록
                      </BtnCommentInsert>
                    ) : null}
                  </div>
                ) : null
              ) : null}
              {qna.qna_step === 2 && (
                <p
                  className="answerTextP"
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  <br />
                  <br />
                  <br />
                  {"[답변내용]"}
                </p>
              )}
              {qna.qna_step === 2 && filteredData.length > 0 && (
                <p className="answerTextP">
                  <br />
                  {filteredData[0].qna_content}
                </p>
              )}
            </AnswerText>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default InquiryRow;
