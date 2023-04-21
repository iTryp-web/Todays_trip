import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import {  ReportRow, ReportTr } from '../../styles/AdminStyle'
import { useState } from 'react'
import { reportResult } from './adminData'
import { useEffect } from 'react'
import { adminStatusUpdateDB } from '../../service/adminLogic'
import { useNavigate } from 'react-router-dom'

const AdminReportRow = ({report, refresh}) => {
  const navigate = useNavigate()
  // 글 누루면 페이지이동(글,댓글은 해당글로 | 회원은 작성글목록으로)
  const movePage = () => {
    console.log('movePage');
  }

  // 처리상태 변수
  const [selected, setSelected] = useState()
  useEffect(() => {
    reportResult.map((item) => {
      if(item.resultNo === report.report_result) {
        setSelected(item.resultText)
      }
    })
  }, [report])
  // 처리 상태 확정버튼 report_no, report_type, report_user, report_num, report_group, report_step
  const btnApply = async(rno, rtype, ruser, rnum, rgroup, rstep) => {
    let result = 0
    reportResult.map((item) => {
      if(item.resultText === selected) {
        result = item.resultNo
      }
    })
    console.log('btnApply=> ' + rno + result);
    const report = {
      report_type: rtype,
      report_no: rno,
      report_result: result,
      status: (result === 1 ? 2 : 0),
      user_id: ruser,
      board_status: (result === 1 ? 1 : 0),
      board_no: rnum,
      comment_status: (result === 1 ? 2 : 0),
      comment_no: rgroup,
      comment_step: rstep,
    }
    const res = await adminStatusUpdateDB(report)
    console.log(res.data);
    refresh()
  }


  return (
    <>
      <ReportTr result={report.report_result}>
        <th className='reportItemTd' onClick={() => movePage()}>
          {report.report_type === 0 ? '글' : (report.report_type === 1 ? '댓글' : (report.report_type === 4 ? '회원' : '-'))}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {report.report_user}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {report.report_reason}
        </th>
        <th className='reportItemTd' onClick={() => movePage()}>
          {new Date(report.report_date).toLocaleDateString('ko-KR')}
        </th>
        <th>
          <ReportRow>
            <DropdownButton className='categoryDropdown' variant=""
              title={selected}>
              {reportResult.map((item)=>(
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
        {/* report_no, report_type, report_user, report_num, report_group, report_step */}
        <th onClick={() => btnApply(report.report_no, report.report_type, report.report_user
                                  , report.report_num, report.report_group, report.report_step)}>
          <p className='btnApply'>적용</p>
        </th>
      </ReportTr>
    </>
  )
}

export default AdminReportRow
