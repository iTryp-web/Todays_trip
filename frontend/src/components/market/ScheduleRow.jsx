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

    // const deleteData = () => {
    //   const databaseRef = ref(database); // DB root 경로
    //   const sRef = child(databaseRef, "s_no"); // market 경로
    //   const sNo = fdata.s_no;
    //   const dataRef = ref(sRef, `market/${sNo}`); // market_no_0 경로 (데이터 경로)
    
    //   remove(dataRef)
    //     .then(() => console.log("데이터 삭제 성공"))
    //     .catch((error) => console.log("데이터 삭제 실패", error));
    // };

  return (
      <>
        <tr>
          <td>{fdata.market_no}</td>
          <td>{fdata.s_no}</td>
          <td>{fdata.buy_no}</td>
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
