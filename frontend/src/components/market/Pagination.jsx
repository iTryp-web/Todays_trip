import React from 'react'
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;


const Pagination = () => {
  // activePage : 현재 페이지
// itemsCountPerPage : 한 페이지 당 보여줄 아이템 수
// totalItemsCount : 총 아이템 수
// pageRangeDisplayed : paginator에서 보여줄 페이지 범위
// prevPageText : 이전 페이지로 가기를 나타내는 텍스트
// nextPageText : 다음 페이지로 가기를 나타내는 텍스트
// onChange : 페이지가 바뀔 때 핸들링하는 함수
const [products, setProducts] = useState([]);  // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(5); // 한 페이지에 보여질 아이템 수 
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
// count에는 아이템 리스트의 length를 set 해줌
  return (
    <>
       <div style={{ marginBottom: 150 }}>
      {currentPosts && products.length > 0 ? (
        currentPosts.map((productData, idx) => (
          <Card key={idx} sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                id: {productData.goods_id}, name : {productData.goods_nm}
              </Typography>
              <Typography variant="body2">
                stat : {productData.stat}
                <br />
                total_amt : {productData.total_cnt}
                <br />
                order_fee : {productData.ordr_fee}
                <br />
                trade_fee : {productData.trade_fee}
                <br />
                created_dt : {productData.created_dt}
                <br />
                created_by : {productData.created_by}
                <br />
                sale_cnt : {productData.sale_cnt}
              </Typography>
              <br />
              <br />
              <Grid container spacing={2}>
                <Grid item={true} xs={3}>
                  <Typography variant="body2">판매율 :</Typography>
                </Grid>
                <Grid item={true} xs={9}>
                  {/* <ProgressBar /> */}
                  <Box sx={{ width: "100%" }}>
                    <ProgressBar value={productData.sale_rate} />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Link to={`/order/${productData.goods_id}`}>구매하기</Link>
              {/* <Button size="large" onClick={navigateToOrder}>
              구매하기
            </Button> */}
            </CardActions>
          </Card>
        ))
      ) : (
        <div> No posts.</div>
      )}
      <Paging page={currentPage} count={count} setPage={setPage} />
    </div>
    </>
  )
}

export default Pagination
