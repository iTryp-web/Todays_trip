import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid gray;
  font-size: 13px;
  padding: 5px;

  thead {
    background-color: lightgray;
    padding: 5px;
    text-align: center;
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

const Term2 = () => {
  return (
    <>
      <div>
        <p>
          <span style={{ fontSize: "11px", fontWeight: "600" }}>
            수집하는 개인정보 항목 / 수집 및 이용목적 / 보유 및 이용기간
          </span>
        </p>
        <Table>
          <thead>
            <tr>
              <th>수집방법</th>
              <th>수집항목</th>
              <th>수집 및 이용목적</th>
              <th>보유 및 이용기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>회원가입</td>
              <td>
                (필수)닉네임, 이메일 주소, 비밀번호 서비스 이용 및 상담, 환불 및
                문의 회신, 서비스{" "}
              </td>
              <td>
                서비스 이용 및 상담, 환불 및 문의 회신, 서비스 개선을 위한 분석
                등
              </td>
              <td rowSpan="2">
                <h6>
                  <strong>회원탈퇴 및 목적달성 후 지체없이 삭제합니다.</strong>
                </h6>
                <p>
                  <br />
                  단, 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령의
                  규정에 따라 거래 관계 확인을 위해 개인정보를 일정기간 보유 할
                  수 있습니다.
                </p>
                <p>
                  <br />
                  또한 부정이용 방지를 위하여 회원 탈퇴 후에도 구매 인증 시
                  입력한 정보는 6개월 동안 보관합니다.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>서비스 이용 과정에서 생성</td>
              <td>
                서비스 이용기록, 접속 로그, IP, 쿠키, 온라인식별자(광고ID, UUID
                등), 단말기 정보(제조사, OS종류, 버전) 이상행위 탐지 및 서비스
                개선을 위한 분석, 이용자의 관심, 기호, 성향 추정을 통한 맞춤형
                콘텐츠
              </td>
              <td>
                이상행위 탐지 및 서비스 개선을 위한 분석, 이용자의 관심, 기호,
                성향 추정을 통한 맞춤형 콘텐츠 및 서비스 제공
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          <span style={{ fontSize: "11px" }}>
            단, 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령의 규정에
            따라 거래 관계 확인을 위해 개인정보를 일정기간 보유 할 수 있습니다.
          </span>
        </p>
        <Table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>법령</th>
              <th>항목</th>
              <th>기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">전자상거래 등에서의 소비자보호에 관한 법률</td>
              <td>계약 또는 청약철회 등에 관한 기록</td>
              <td>5년</td>
            </tr>
            <tr>
              <td>대금결제 및 재화 등의 공급에 관한 기록</td>
              <td>5년</td>
            </tr>
            <tr>
              <td>소비자의 불만 또는 분쟁 처리에 관한 기록</td>
              <td>3년</td>
            </tr>
            <tr>
              <td>위치정보의 보호 및 이용 등에 관한 법률</td>
              <td>개인위치정보에 관한 기록</td>
              <td>6개월</td>
            </tr>
            <tr>
              <td>전자금융거래법</td>
              <td>전자금융 거래에 관한 기록</td>
              <td>5년</td>
            </tr>
            <tr>
              <td>통신비밀보호법</td>
              <td>서비스 이용 관련 개인정보(로그기록)</td>
              <td>3개월</td>
            </tr>
          </tbody>
        </Table>
        <span style={{ fontSize: "11px", fontWeight: "600" }}>
          동의를 거부할 권리 및 거부 경우의 불이익
        </span>
        <p style={{ fontSize: "11px" }}>
          귀하께서는 오늘의집이 위와 같이 수집하는 개인정보에 대해 동의하지
          않거나 개인정보를 기재하지 않음으로써 거부할 수 있습니다. 다만, 이때
          회원에게 제공되는 서비스가 제한될 수 있습니다.
        </p>
      </div>
    </>
  );
};

export default Term2;
