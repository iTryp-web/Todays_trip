import React from 'react'
import { PageButton, PageNav } from '../../styles/PaginationStyle'

const Pagination = ({total, limit, page, setPage}) => {
  /* 페이지네이션 사용법
    1. 변수선언
      const [limit, setLimit] = useState(10);
      const [page, setPage] = useState(1);
      const offset = (page - 1) * limit;

    2. 아래와같은 형식으로 map돌리기
      {reportList.slice(offset, offset + limit).map((report) => {
        return <AdminReportRow key={report.report_no} report={report} refresh={refresh} />
      })}
      
    3. 아래와같이 컴포넌트 호출
      <Pagination total={reportList.length} limit={limit} page={page} setPage={setPage} />
   */
  const numPages = Math.ceil(total / limit)

  return (
    <>
      <PageNav>
        <PageButton className='arrow' onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </PageButton>

        {Array(numPages)
          .fill()
          .map((_, i) => (
            <PageButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </PageButton>
          ))}

        <PageButton className='arrow' onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </PageButton>
      </PageNav>
    </>
  )
}

export default Pagination