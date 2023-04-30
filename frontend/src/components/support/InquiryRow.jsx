import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { qnaDeleteDB } from "../../service/marketLogic";
import { AnswerComplete, AnswerText } from "../../styles/SupportStyle";
import { TableCell, TableRow } from "@material-ui/core";
import { AiFillLock } from "react-icons/ai";
import Toast from "../include/Toast";
import { setToastMsg } from "../../redux/toastStatus/action";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { InquiryUpdateDB, inquiryInsertDB } from "../../service/supportLogic";
import { BtnCommentInsert, CommentInput } from "../../styles/BoardStyle";

const ReplyIcon = styled.div`
  display: flex;
  font-size: 17px;
  margin: 10px;
  color: #4996f3;
`;
const Arrow = styled.span`
  // display :flex;
`;
const InquiryRow = ({ qna, qnaList }) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem("user_id"));
  const status = useSelector((store) => store.toastStatus.status);

  /* qna Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(null);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };

  const answerInsert = async () => {
    console.log("answerInsert");
    const inquiry = {
      // user_id: sessionStorage.getItem("user_id"),
      user_id: "admin",
      qna_title: qna.qna_no + "번 답변",
      qna_content: answer,
      qna_step: 2,
      qna_sort: qna.qna_sort,
    };
    const res = await inquiryInsertDB(inquiry);
    console.log(res.data);
    navigate("/support/inquiryBoard");
  };

  const stepUpdate = async () => {
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

  // qna글 삭제 버튼
  const qnaDelete = async () => {
    console.log("qnaDelete" + qna.qna_no);
    const qna = {
      qna_no: qna.qna_no,
    };
    const res = await qnaDeleteDB(qna);
    console.log("qnaDelete=> " + res.data);
    navigate("/market/detail");
  };

  const dispatch = useDispatch();
  const [show, setShow] = useState(false); //모달창초기값
  const handleClose = () => setShow(false); //모달창닫기
  const handleShow = () => setShow(true); //모달창보여주기
  /* 버튼이 열리고 닫히는 상태에 대한 useState 기본값 false */
  const [isOpen, setIsOpen] = useState(false);

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
      {/* ========================== [[  문의하기 Modal ]] ========================== */}
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Q&A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="f_memo">
            <Form.Group className="mb-3 row" controlId="mTitle">
              <Form.Label className="col-sm-2 col-form-label">제목</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  className="form-control form-control-sm"
                  type="text"
                  name="m_title"
                  onChange={handleChangeForm}
                  placeholder="답변 제목을 입력해주세요"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="boardWriter">
              <Form.Label className="col-sm-2 col-form-label">내용</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  maxLength="100"
                  style={{ height: "150px" }}
                  as="textarea"
                  rows={3}
                  name="m_writer"
                  onChange={handleChangeForm}
                  className="form-control form-control-sm"
                  placeholder="답변을 내용을 입력하세요."
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            답변 등록
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ========================== [[ 문의하기 Modal ]] ========================== */}

      {status && <Toast />}
      {qna.qna_step === 1 ? null : (
        <TableRow>
          {/* 문의 답변하기 버튼. */}
          {/* {qna.qna_step === 1 ? (
          sessionStorage.getItem("user_role") === 2 ? (
            <InquiryAnswerButton>답변하기</InquiryAnswerButton>
          ) : null
        ) : null} */}
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
                {qna.qna_step === 2 ? (
                  <AnswerComplete>[답변완료]</AnswerComplete>
                ) : null}
                {qna.qna_title}
              </span>
            </div>
          </TableCell>

          <TableCell align="center">{hideChars(qna.user_id)}</TableCell>
          <TableCell align="center">{qna.qna_date}</TableCell>
        </TableRow>
      )}

      {
        <TableRow>
          <TableCell colSpan={4}>
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
              {qna.qna_step === 0 &&
                sessionStorage.getItem("user_role") === 2 && (
                  <div>
                    <CommentInput
                      id="commentInput"
                      placeholder="댓글을 남겨보세요"
                      onChange={(e) => {
                        handleAnswer(e.target.value);
                      }}
                      maxLength={255}
                    />
                    {answer ? (
                      <BtnCommentInsert onClick={() => answerInsert()}>
                        등록
                      </BtnCommentInsert>
                    ) : null}
                  </div>
                )}
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
      }
    </>
  );
};

export default InquiryRow;
