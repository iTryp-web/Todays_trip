import React from 'react'
import { useState } from 'react';
import { ReportRow, ReportTr } from '../../styles/AdminStyle';
import { resignResult } from './adminData';
import { useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { adminResignUpdateDB } from '../../service/adminLogic';

const AdminResignRow = ({resign, refresh}) => {
  // 처리상태 변수
  const [selected, setSelected] = useState()
  useEffect(() => {
    resignResult.map((item) => {
      if(item.resultNo === resign.status) {
        setSelected(item.resultText)
      }
    })
  }, [resign])
  
  // 확정 버튼
  const btnApply = async(uid, qno) => {
    let result = 0
    let qna_step = 0;
    resignResult.map((item) => {
      if(item.resultText === selected) {
        result = item.resultNo
        if(result === 1) {
          qna_step = 2
        }
      }
    })
    console.log('btnApply=> ' + uid + selected + result)
    const resign = {
      user_id: uid,
      status: result,
      qna_no: qno,
      qna_step: qna_step,
    }
    const res = await adminResignUpdateDB(resign)
    console.log(res.data);
    refresh()
  }

  const removeTag = (content) => {
    if(content) {
      const newText = content.replace(/(<([^>]+)>)/gi,'');
      console.log(newText)
      return newText
    }
  }

  return (
    <>
      <ReportTr result={resign.status}>
        <th>
          {resign.user_id}
        </th>
        <th>
          {resign.qna_title}
        </th>
        <th>
          {removeTag(resign.qna_content)}
        </th>
        <th>
          {resign.qna_date}
        </th>
        <th>
          <ReportRow>
            <DropdownButton className='categoryDropdown' variant=""
              title={selected}>
              {resignResult.map((item)=>(
                  <Dropdown.Item as="button" key={item.resultText} onClick={()=>{
                    setSelected(item.resultText); 
                  }}>
                    {item.resultText}
                  </Dropdown.Item>
                )) 
              }
            </DropdownButton>
          </ReportRow>
        </th>
        <th onClick={() => btnApply(resign.user_id, resign.qna_no)}>
          <p className='btnApply'>적용</p>
        </th>
      </ReportTr>
    </>
  )
}

export default AdminResignRow
