import React, { useState } from "react";
import Pagination from "../include/Pagination";
import { InquiryListDB } from "../../service/supportLogic";
import InquiryRow from "./InquiryRow";
import { useEffect } from "react";
import Header from "../include/Header";
import {
  InquiryH3,
  InquiryHeader,
  InquirySection,
  WriteButton,
} from "../../styles/SupportStyle";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Footer from "../include/Footer";

const InquiryList = () => {
  const navigate = useNavigate();
  //문의글 갯수
  const [inquiryData, setInquiryData] = useState([]); // 문의 데이터
  const qcount = inquiryData.length;
  // 페이지넘기기
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [start, setStart] = useState();

  useEffect(() => {
    const inquiryList = async () => {
      let inquiry = {};
      const res = await InquiryListDB(inquiry);
      console.log(res.data);
      const datas = res.data;
      const list = datas
        .filter(
          (item) =>
            item.QNA_SORT === 2 || item.QNA_SORT === 3 || item.QNA_SORT === 4
        ) // QNA_SORT가 2 또는 4인 데이터만 걸러냅니다.
        .map((item) => ({
          qna_no: item.QNA_NO,
          user_id: item.USER_ID,
          qna_step: item.QNA_STEP,
          qna_title: item.QNA_TITLE,
          qna_content: item.QNA_CONTENT,
          qna_date: item.QNA_DATE,
          qna_sort: item.QNA_SORT,
          file_exist: item.FILE_EXIST,
        }));
      setInquiryData(list);
      console.log("==================");
      console.log(list);
      console.log("==================");
    };
    inquiryList();
  }, [start]);

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
            {inquiryData && //데이터가 한건도 없는 경우를 고려
              inquiryData
                .slice(offset, offset + limit)
                .map((qna) => (
                  <InquiryRow
                    key={inquiryData.qna_no}
                    qna={qna}
                    qnaList={inquiryData}
                    setStart={setStart}
                  />
                ))}
          </TableBody>
        </Table>
        <Pagination
          total={inquiryData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </InquirySection>
      <Footer />
    </>
  );
};

export default InquiryList;
