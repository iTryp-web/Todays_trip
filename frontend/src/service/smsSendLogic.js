import axios from "axios";
import { makeSignature } from "./makeSignature";

const makeNumber = () => {
  let num = "";
  for (let i = 0; i < 6; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
};

export const sendSmsLogic = (phoneNo) => {
  const ranNo = makeNumber();
  let rMap = [];
  const data = {
    type: "SMS",
    from: process.env.REACT_APP_SMS_FROM,
    content: "[오늘의 여행] 인증번호 [" + ranNo + "]를 입력해주세요.", //내용
    messages: [
      {
        to: phoneNo, //수신번호
      },
    ],
  };
  try {
    let time = Date.now().toString();
    axios({
      method: "POST",
      url:
        "/sms/v2/services/" +
        process.env.REACT_APP_NAVER_SERVICE_ID +
        "/messages",
      headers: {
        "Access-Control-Allow-Origin": "https://sens.apigw.ntruss.com",
        "Content-Type": "application/json; charset=utf-8",
        "x-ncp-apigw-timestamp": time,
        "x-ncp-iam-access-key": process.env.REACT_APP_NAVER_ACCESS_KEY,
        "x-ncp-apigw-signature-v2": makeSignature(time),
      },
      data: data,
    });
    return ranNo;
  } catch (error) {
    console.log(error);
    return "fail";
  }
};
