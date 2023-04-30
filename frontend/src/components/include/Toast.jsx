import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setToastFalse } from "../../redux/toastStatus/action";
import "./toast.css";

/*
  리덕스 토스트메시지 사용법
  1. 변수와 useEffect 선언
  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(setToastMsg('테스트123'))
    if(userId !== null && userId.length > 0) {
      // setToastMsg가 호출되면 false가 true로 변경됨
      dispatch(setToastMsg('로그인 되었습니다.'))
    } else {
      dispatch(setToastMsg('로그인이 필요합니다.'))
    }
  }, [])

  2. 렌더링되는 return에 아래의 코드 넣기 + Toast 임포트
  {status && <Toast />}
*/
const ToastDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 11px;
  min-width: 350px;
  transform: translate(-50%, -50%);
  justify-content: center;
  text-align: center;
  //font-weight: bold;
  font-size: 18px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  border-radius: 4px;
  border: 1px solid #000000;
`;

const Toast = () => {
  const toastStatus = useSelector((state) => state.toastStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastStatus.status) {
      setTimeout(() => {
        dispatch(setToastFalse());
      }, 800);
    }
  }, [toastStatus.status, dispatch]);

  return <ToastDiv>{JSON.stringify(toastStatus.msg)}</ToastDiv>;
};

export default Toast;
