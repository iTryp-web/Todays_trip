import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid gray;
  font-size: 13px;
  padding: 5px;

  thead {
    background-color: lightgray;
    padding: 5px;
    text-align : center;
  }
  th {
    border: 1px solid gray;
    width: 200px;
    padding: 5px;
  }
  tr {
    border: 1px solid gray;
    padding: 5px;
  }
  td {
    border: 1px solid gray;
    padding: 5px;
  }
`;

const Term3 = () => {
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>수집항목</th>
          <th>수집 및 이용목적</th>
          <th>수집방법</th>
          <th>보유 및 이용기간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>회원 가입시</td>
          <td>닉네임, 이메일, 성별 및 생일(간편가입시)</td>
          <td rowSpan="3">
            <strong style={{ fontSize: "14px" }}>
              프로모션 및 이벤트 정보 등의 전달 및 참여기회 제공
            </strong>
            <br/>맞춤형 광고 전송 등 광고 및 마케팅 목적의 활용
            <br/>고객 분석, 설문조사 등
          </td>
          <td rowSpan="3">
            <strong style={{ fontSize: "14px" }}>
              동의 철회시까지
            </strong>
          </td>
        </tr>
        <tr>
          <td>스토어 서비스(각종 상품/서비스 구매 등), 홈서비스(상담신청 등) 이용 및 계약 이행</td>
          <td>이름, 이메일, 핸드폰번호, 스토어 서비스 이용기록(구매내역, 배송정보, 결제내역, 결제수단 등), 홈서비스 이용기록(주소 등 상담자정보, 상담신청 내용, 관련 계약 내역 등)</td>
        </tr>
        <tr>
          <td>서비스 이용과정</td>
          <td>서비스 이용 기록, 저속 로그, IP, 쿠키, 온라인식별자(광고ID 및 이용자 고유식별자), 단말기 정보</td>
        </tr>
      </tbody>
    </Table>
    <p style ={{fontSize : "11px"}}>개인정보의 수집 이용에 동의를 거부할 수 있으며, 동의 거부시에도 서비스 이용에 제한은 없습니다.</p>
    </>
  );
};

export default Term3;
