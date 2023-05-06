const ChatBotData = [
  {
    id: "1",
    message: "안녕하세요. 오늘의 여행 채팅 상담입니다.",
    trigger: "2",
  },
  {
    id: "2",
    message:
      "고객센터 유선 문의는 평일 오전 9시 ~ 오후 6시 사이에 운영되고 있습니다. 1:1 문의는 24시간 접수 가능합니다.",
    trigger: "3",
  },
  {
    id: "3",
    message: "문의하실 내용을 선택해주세요.",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: "reserve", label: "예약 문의", trigger: "5" },
      { value: "cancel", label: "취소 문의", trigger: "6" },
      { value: "etc", label: "기타 문의", trigger: "7" },
    ],
  },
  {
    id: "5",
    message: "예약 문의를 선택하셨습니다.",
    trigger: "8",
  },
  {
    id: "6",
    message: "취소 문의를 선택하셨습니다.",
    trigger: "9",
  },
  {
    id: "7",
    message: "기타 문의를 선택하셨습니다.",
    trigger: "10",
  },
  {
    id: "8",
    message: "어떤 상품의 예약을 원하시나요?",
    trigger: "11",
  },
  {
    id: "9",
    message: "어떤 주문건의 취소를 원하시나요?",
    trigger: "12",
  },
  {
    id: "10",
    message: "무엇이 궁금하신가요?",
    trigger: "13",
  },
  // 문의 종류 상세 구분
  {
    id: "11",
    options: [
      {
        value: "14",
        label: "패키지 및 투어",
        trigger: "14",
      },
      {
        value: "15",
        label: "티켓",
        trigger: "15",
      },
      {
        value: "16",
        label: "교통",
        trigger: "16",
      },
      {
        value: "17",
        label: "숙소",
        trigger: "17",
      },
    ],
  },
  {
    id: "12",
    options: [
      {
        value: "18",
        label: "패키지 및 투어",
        trigger: "18",
      },
      {
        value: "19",
        label: "티켓",
        trigger: "19",
      },
      {
        value: "20",
        label: "교통",
        trigger: "20",
      },
      {
        value: "21",
        label: "숙소",
        trigger: "21",
      },
    ],
  },
  {
    id: "13",
    options: [
      {
        value: "22",
        label: "내 정보를 수정하고 싶어요.",
        trigger: "22",
      },
      {
        value: "23",
        label: "단체 구매는 어떻게 하면 되나요?",
        trigger: "23",
      },
      {
        value: "24",
        label: "사이트에 궁금한 점이 있습니다.",
        trigger: "24",
      },
      {
        value: "25",
        label: "그 외의 다른 문의가 있습니다.",
        trigger: "25",
      },
    ],
  },
  // 예약 답변
  {
    id: "14",
    message:
      "패키지 및 투어 상품은 본 사이트의 예약하기 또는 고객센터 유선 문의를 통해 예약 가능합니다.",
    trigger: "35",
  },
  {
    id: "15",
    message:
      "티켓 상품은 본 사이트의 예약하기를 통해 예약 가능합니다. 해당 상품 페이지에서 구매하기를 눌러주세요.",
    trigger: "36",
  },
  {
    id: "16",
    message:
      "교통 상품은 본 사이트의 예약하기를 통해 예약 가능합니다. 해당 상품 페이지에서 구매하기를 눌러주세요.",
    trigger: "36",
  },
  {
    id: "17",
    message:
      "숙소 상품은 본 사이트의 예약하기 또는 고객센터 유선 문의를 통해 예약 가능합니다.",
    trigger: "35",
  },
  // 취소 답변
  {
    id: "18",
    message:
      "패키지 및 투어 상품은 판매자와의 협의 후 고객센터 유선 문의를 통해 취소 가능합니다.",
    trigger: "35",
  },
  {
    id: "19",
    message: "티켓 상품은 마이페이지의 주문 내역을 통해 취소 가능합니다.",
    trigger: "34",
  },
  {
    id: "20",
    message: "교통 상품은 마이페이지의 주문 내역을 통해 취소 가능합니다.",
    trigger: "34",
  },
  {
    id: "21",
    message:
      "숙소 상품은 판매자와의 협의 후 고객센터 유선 문의를 통해 취소 가능합니다.",
    trigger: "35",
  },
  // 기타 문의 답변
  {
    id: "22",
    message:
      "내 정보 수정은 마이페이지 내의 [내 정보 수정] 메뉴를 통해 수정하실 수 있습니다.",
    trigger: "36",
  },
  {
    id: "23",
    message: "단체 구매는 고객센터 유선 문의를 통해 예약 가능합니다.",
    trigger: "26",
  },
  {
    id: "24",
    message:
      "본 사이트에 대한 궁금한 점 또는 건의 사항은 고객센터의 1:1 문의 또는 유선 문의를 통해 전달 가능합니다.",
    trigger: "28",
  },
  {
    id: "25",
    message:
      "현재 챗봇에서 제공하지 않는 문의의 경우 고객센터의 1:1 문의 또는 유선 문의를 통해 전달 가능합니다.",
    trigger: "28",
  },
  // 기타 문의 상세 답변
  {
    id: "26",
    message:
      "단체 구매의 경우 출발 2주 전까지 연락주시면 원하시는 일정에 맞춘 다양한 서비스를 제공해드립니다.",
    trigger: "27",
  },
  {
    id: "27",
    message:
      "인원에 따라 많은 할인 혜택도 제공해드리고 있으니 언제든 문의 주세요. \n 고객센터는 아래와 같이 운영하고 있습니다.",
    trigger: "35",
  },
  {
    id: "28",
    message:
      "1:1 문의는 24시간 접수 가능하며 고객센터의 운영 시간은 평일 오전 9시 ~ 18시입니다. 유선 문의는",
    trigger: "35",
  },
  // 공통 문구
  {
    id: "34",
    message:
      "카드 결제의 경우 카드사의 전표 매입 상황에 따라 환불까지 최소 3일에서 최대 14일까지 소요될 수 있습니다.",
    trigger: "36",
  },
  {
    id: "35",
    message: "평일 9시 ~ 18시에 1544-9970(유료)로 연락 바랍니다.",
    trigger: "36",
  },
  // 종료
  {
    id: "36",
    message:
      "언제나 고객님께 만족을 드릴 수 있도록 오늘의 여행 임직원은 항상 최선을 다하겠습니다.",
    trigger: "37",
  },
  {
    id: "37",
    message: "감사합니다.",
    end: true,
  },
];
export default ChatBotData;
