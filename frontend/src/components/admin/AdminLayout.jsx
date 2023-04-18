import React from 'react'
import { AContentSection, AdminCategory, AdminCategoryLi, AdminCategoryUl, AdminH3, AdminPageUl, AdminSection } from '../../styles/AdminStyle'
import { adminCategories } from './adminData';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { adminOverviewDB } from "../../service/adminLogic";

const AdminLayout = () => {
  // 화면전환
  const navigate = useNavigate()
  // 파라미터의 카테고리값
  let {category} = useParams()
  console.log(category);

  // 판매목록(새로운 문의) 변수
  const [qnaList, setQnaList] = useState([{}])
  // 신고 목록(새로운 신고) 변수
  const [reportList, setReportList] = useState([{}])
  // 탈퇴 목록(새로운 신청) 변수
  const [resignList, setResignList] = useState([{}])

  /* 오버뷰 불러오기 */
  const [overview, setOverview] = useState([{}])
  useEffect(() => {
    const adminOverview = async() => {
      const res = await adminOverviewDB()
      console.log(res.data);
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      // 문의 db 담기 - 새로운문의 qna_new
      const list1 = []
      if(jsonDoc.length > 1) {
        console.log(jsonDoc[0].MARKET_COUNT);
        for(let i=0; i<jsonDoc[0].MARKET_COUNT; i++) {
          const obj = {
            market_no: jsonDoc[i].MARKET_NO,
            user_id: jsonDoc[i].USER_ID,
            market_category: jsonDoc[i].MARKET_CATEGORY,
            market_title: jsonDoc[i].MARKET_TITLE,
            market_price: jsonDoc[i].MARKET_PRICE,
            qna_count: jsonDoc[i].QNA_COUNT,
          }
          console.log(obj);
          list1.push(obj)
        }
      }
      setQnaList(list1)
      // 신고 db 담기 - 새로운 신고 report_new
      const list2 = []
      const list3 = []
      if(jsonDoc.length > jsonDoc[0].MARKET_COUNT) {
        console.log(jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT);
        for(let i=jsonDoc[0].MARKET_COUNT;
          i<(jsonDoc[0].MARKET_COUNT 
            + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT);
          i++) {
          const obj = {
            report_no: jsonDoc[i].REPORT_NO,
            user_id: jsonDoc[i].USER_ID,
            report_type: jsonDoc[i].REPORT_TYPE,
            report_num: jsonDoc[i].REPORT_NUM,
            report_group: jsonDoc[i].REPORT_GROUP,
            report_step: jsonDoc[i].REPORT_STEP,
            report_user: jsonDoc[i].REPORT_USER,
            report_reason: jsonDoc[i].REPORT_REASON,
            report_date: jsonDoc[i].REPORT_DATE,
            report_result: jsonDoc[i].REPORT_RESULT,
          }
          console.log(obj);
          list2.push(obj)
        }
        // 탈퇴신청 db 담기 - 새로운 탈퇴신청 resign_new
        if(jsonDoc.length > (jsonDoc[0].MARKET_COUNT + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT)) {
          console.log(jsonDoc[jsonDoc[0].MARKET_COUNT + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT].RESIGN_COUNT);
          for(let i=(jsonDoc[0].MARKET_COUNT + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT);
            i<(jsonDoc[0].MARKET_COUNT 
              + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT
              + jsonDoc[jsonDoc[0].MARKET_COUNT + jsonDoc[jsonDoc[0].MARKET_COUNT].REPORT_COUNT].RESIGN_COUNT);
            i++) {
            const obj = {
              user_id: jsonDoc[i].USER_ID,
              user_nickname: jsonDoc[i].USER_NICKNAME,
              user_name: jsonDoc[i].USER_NAME,
              user_phone: jsonDoc[i].USER_PHONE,
              user_level: jsonDoc[i].USER_LEVEL,
              status: jsonDoc[i].STATUS,
              qna_title: jsonDoc[i].QNA_TITLE,
              qna_content: jsonDoc[i].QNA_CONTENT,
              qna_date: jsonDoc[i].QNA_DATE,
            }
            console.log(obj);
            list3.push(obj)
          }
        }
        setReportList(list2)
        setResignList(list3)
      }
    }
    adminOverview()
  }, [category])
  
  /* 왼쪽 카테고리 */
  // 선택한 카테고리 담기
  const [selected, setSelected] = useState('판매')
  const handleCategory =  useCallback((name) => {
    let category = ''
    {adminCategories.map((item) => {
      if(item.name === name) {
        category = item.category
      }
    })}
    navigate('/admin/'+category)
  }, [])
  useEffect(() => {
    let name = ''
    {adminCategories.map((item) => {
      if(item.category === category) {
        name = item.name
      }
    })}
    console.log('effect=> ' + name);
    setSelected(name)
  }, [category])

  return (
    <>
      <AdminSection>
        {/* 왼쪽 카테고리 */}
        <AdminCategory>
          <AdminPageUl>
            관리자 페이지
          </AdminPageUl>
          <AdminCategoryUl>
            {adminCategories &&
              adminCategories.map((category) => {
                return (
                  <AdminCategoryLi
                    key={category.name}
                    active={category.name === selected}
                    onClick={() => handleCategory(category.name)}
                  >
                    <img src={category.img} alt={category.catrgory} />
                    {category.name}
                  </AdminCategoryLi>
                );
              })}
          </AdminCategoryUl>
        </AdminCategory>

        {/* 오른쪽 커뮤 내용 */}
        <AContentSection className='content'>
          {/* 글 목록 */}
          글목록~~
          {/* <ul>
            {posts && posts.map((post) => {
              return <BoardRow key={post.board_no} post={post} />
            })}
          </ul> */}
        </AContentSection>
      </AdminSection>
    </>
  )
}

export default AdminLayout
