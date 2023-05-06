// AdminLayout 카테고리
export const adminCategories = [
  {
    name: '마켓',
    category: 'market',
    img: '/images/admin/market.png'
  },
  {
    name: '주문',
    category: 'order',
    img: '/images/admin/order.png'
  },
  {
    name: '문의',
    category: 'inquiry',
    img: '/images/admin/inquiry.png'
  },
  {
    name: '신고',
    category: 'report',
    img: '/images/admin/report.png'
  },
  {
    name: '차단',
    category: 'ban',
    img: '/images/admin/ban.png'
  },
  {
    name: '탈퇴',
    category: 'resign',
    img: '/images/admin/resign.png'
  },
]

// AdminLayout 판매항목의 카테고리
export const aMarketCategories = [
  {
    name: '전체',
    category: 'all',
  },
  {
    name: '패키지',
    category: 'package',
  },
  {
    name: '투어',
    category: 'tour',
  },
  {
    name: '티켓',
    category: 'ticket',
  },
  {
    name: '교통',
    category: 'transportation',
  },
  {
    name: '숙소',
    category: 'accommodation',
  },
]

// AdminReportRow 처리항목 카테고리
export const reportResult = [
  {
    resultNo: 0,
    resultText: '미처리',
  },
  {
    resultNo: 1,
    resultText: '차단',
  },
  {
    resultNo: 2,
    resultText: '취소',
  },
]

// AdminUserDetail 카테고리
export const userDetail = [
  {
    userNo: 0,
    userType: '글',
  },
  {
    userNo: 1,
    userType: '댓글',
  },
]

// AdminLayout 차단 카테고리
export const aBanCategories = [
  {
    name: '회원',
    category: 'user',
  },
  {
    name: '글',
    category: 'board',
  },
  {
    name: '댓글',
    category: 'comment',
  },
]

// AdminResignRow 처리항목 카테고리
export const resignResult = [
  {
    resultNo: 0,
    resultText: '미처리',
  },
  {
    resultNo: 1,
    resultText: '탈퇴',
  },
]

// AdminOrderRow 처리항목 카테고리
export const orderResult = [
  {
    resultNo: 0,
    resultText: '예약중',
  },
  {
    resultNo: 1,
    resultText: '취소',
  },
  {
    resultNo: 2,
    resultText: '판매완료',
  },
]