import { child, ref, remove } from '@firebase/database'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { database } from '../../service/firebase'

const ScheduleRow = ({fdata, setStart}) => {
  const navigate =useState();
  console.log(fdata.s_no)
  

    //실시간 디비 삭제
    const dateDelete=()=>{
      // event.preventDefault()
      remove(ref(database,'market/'+fdata.s_no))
      // navigate('/market/write')
      // setStart(new Date())//리프레쉬용
    }

  return (
      <>
        <tr>
          <td>{fdata.market_no}</td>
          <td>{fdata.s_no}</td>
          <td>{fdata.s_count}</td>
          <td>{`${fdata.start_date}~${fdata.finish_date}`}</td>
          <td>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={dateDelete}>삭제</Button>
            </div>
          </td>
        </tr>
      </>
    )
}

export default ScheduleRow
