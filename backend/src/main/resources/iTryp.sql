﻿-- 날짜 형식 바꾸기
ALTER SESSION SET NLS_DATE_FORMAT='YYYY-MM-DD HH24:MI:SS';

DROP TABLE "TB_USER";

CREATE TABLE "TB_USER" (
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"USER_PW"	VARCHAR2(256)		NOT NULL,
	"USER_EMAIL"	VARCHAR2(100)		NOT NULL,
	"USER_NICKNAME"	VARCHAR2(32)		NOT NULL,
	"USER_NAME"	VARCHAR2(32)		NOT NULL,
	"USER_PHONE"	VARCHAR2(32)		NOT NULL,
	"USER_ZIPCODE"	VARCHAR2(32)		NULL,
	"USER_ADDRESS"	VARCHAR2(128)		NULL,
	"USER_ADDRESS_DETAIL"	VARCHAR2(128)		NULL,
	"USER_LEVEL"	VARCHAR2(32)	DEFAULT 0	NULL,
	"FAIL_CNT"	NUMBER(2)	DEFAULT 0	NULL,
	"SALT"	VARCHAR2(32)		NOT NULL,
	"ROLE"	NUMBER(2)	DEFAULT 0	NOT NULL,
	"STATUS"	NUMBER(2)	DEFAULT 0	NOT NULL
);

COMMENT ON COLUMN "TB_USER"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_USER"."USER_PW" IS '계정 비밀번호';

COMMENT ON COLUMN "TB_USER"."USER_EMAIL" IS '회원 이메일';

COMMENT ON COLUMN "TB_USER"."USER_NICKNAME" IS '회원 닉네임';

COMMENT ON COLUMN "TB_USER"."USER_NAME" IS '회원명';

COMMENT ON COLUMN "TB_USER"."USER_PHONE" IS '회원 연락처';

COMMENT ON COLUMN "TB_USER"."USER_ZIPCODE" IS '회원 우편번호';

COMMENT ON COLUMN "TB_USER"."USER_ADDRESS" IS '회원 주소';

COMMENT ON COLUMN "TB_USER"."USER_ADDRESS_DETAIL" IS '회원 상세 주소';

COMMENT ON COLUMN "TB_USER"."USER_LEVEL" IS '회원 등급';

COMMENT ON COLUMN "TB_USER"."FAIL_CNT" IS '로그인 실패 카운트';

COMMENT ON COLUMN "TB_USER"."SALT" IS 'PW 암호화용 코드';

COMMENT ON COLUMN "TB_USER"."ROLE" IS '회원 권한 구분';

COMMENT ON COLUMN "TB_USER"."STATUS" IS '회원 탈퇴, 차단 구분';

DROP TABLE "TB_U_COUPON";

CREATE TABLE "TB_U_COUPON" (
	"COUPON_NO"	VARCHAR2(100)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"COUPON_RATE"	NUMBER(2)		NOT NULL,
	"COUPON_MIN"	NUMBER(5)		NOT NULL,
	"COUPON_MAX"	NUMBER(6)		NOT NULL,
	"COUPON_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NULL,
	"COUPON_VALID"	NUMBER(3)		NULL,
	"COUPON_EXP"	NUMBER(2)	DEFAULT 0	NULL
);

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_NO" IS '쿠폰번호';

COMMENT ON COLUMN "TB_U_COUPON"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_RATE" IS '할인율';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_MIN" IS '최소 사용 가능 금액';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_MAX" IS '최대 사용 가능금액';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_DATE" IS '쿠폰 발행 날짜';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_VALID" IS '쿠폰 사용 가능 기간';

COMMENT ON COLUMN "TB_U_COUPON"."COUPON_EXP" IS '쿠폰 사용/만료 여부 사용가능: 0 / 사용불가: 1';

DROP TABLE "TB_BOARD";

CREATE TABLE "TB_BOARD" (
	"BOARD_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"TYPE_BOARD"	NUMBER(2)	DEFAULT 0	NOT NULL,
	"BOARD_CATEGORY"	VARCHAR2(32)		NOT NULL,
	"BOARD_TITLE"	VARCHAR2(128)		NULL,
	"BOARD_CONTENT"	VARCHAR2(4000)		NULL,
	"BOARD_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NULL,
	"BOARD_HIT"	VARCHAR2(10)	DEFAULT 0	NULL,
	"BOARD_STATUS"	NUMBER(2)	DEFAULT 0	NULL
);

COMMENT ON COLUMN "TB_BOARD"."BOARD_NO" IS '글 번호';

COMMENT ON COLUMN "TB_BOARD"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_BOARD"."TYPE_BOARD" IS '좋아요,신고용 타입';

COMMENT ON COLUMN "TB_BOARD"."BOARD_CATEGORY" IS '글 카테고리';

COMMENT ON COLUMN "TB_BOARD"."BOARD_TITLE" IS '글 제목';

COMMENT ON COLUMN "TB_BOARD"."BOARD_CONTENT" IS '글 내용';

COMMENT ON COLUMN "TB_BOARD"."BOARD_DATE" IS '작성일';

COMMENT ON COLUMN "TB_BOARD"."BOARD_HIT" IS '조회수';

COMMENT ON COLUMN "TB_BOARD"."BOARD_STATUS" IS '게시글 차단 구분 디폴트:0 / 차단:1';

DROP TABLE "TB_B_COMMENT";

CREATE TABLE "TB_B_COMMENT" (
	"BOARD_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"TYPE_COMMENT"	NUMBER(2)	DEFAULT 1	NOT NULL,
	"COMMENT_NO"	NUMBER(10)		NOT NULL,
	"COMMENT_STEP"	NUMBER(10)	DEFAULT 0	NULL,
	"COMMENT_CONTENT"	VARCHAR2(400)		NULL,
	"COMMENT_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NULL,
	"COMMENT_STATUS"	NUMBER(2)	DEFAULT 0	NULL
);

COMMENT ON COLUMN "TB_B_COMMENT"."BOARD_NO" IS '글 번호';

COMMENT ON COLUMN "TB_B_COMMENT"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_B_COMMENT"."TYPE_COMMENT" IS '좋아요,신고용 타입';

COMMENT ON COLUMN "TB_B_COMMENT"."COMMENT_NO" IS '글번호';

COMMENT ON COLUMN "TB_B_COMMENT"."COMMENT_STEP" IS '대댓글 번호
댓글 : 0/대댓글 :1이상 SEQ';

COMMENT ON COLUMN "TB_B_COMMENT"."COMMENT_CONTENT" IS '댓글 내용';

COMMENT ON COLUMN "TB_B_COMMENT"."COMMENT_DATE" IS '댓글 작성일
"YYYY-MM-DD HH:MM:SS"';

COMMENT ON COLUMN "TB_B_COMMENT"."COMMENT_STATUS" IS '댓글 차단 구분 디폴트:0 /삭제:1/ 차단:2';

DROP TABLE "TB_FILE";

DROP TABLE "TB_B_FILE";

CREATE TABLE "TB_B_FILE" (
	"FILE_NO"	NUMBER(10)		NOT NULL,
	"BOARD_NO"	NUMBER(10)		NOT NULL,
	"FILE_NAME"	VARCHAR2(500)		NULL,
	"FILE_URL"	VARCHAR2(500)		NULL,
	"FILE_SIZE"	NUMBER(10, 2)		NULL
);

COMMENT ON COLUMN "TB_B_FILE"."FILE_NO" IS '파일 번호';

COMMENT ON COLUMN "TB_B_FILE"."BOARD_NO" IS '글 번호';

COMMENT ON COLUMN "TB_B_FILE"."FILE_NAME" IS '파일 이름';

COMMENT ON COLUMN "TB_B_FILE"."FILE_URL" IS '파일 url';

COMMENT ON COLUMN "TB_B_FILE"."FILE_SIZE" IS '파일 크기';


DROP TABLE "TB_M_REVIEW";

CREATE TABLE "TB_M_REVIEW" (
	"REVIEW_NO"	NUMBER(10)		NOT NULL,
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"TYPE_REVIEW"	NUMBER(2)	DEFAULT 3	NOT NULL,
	"REVIEW_STAR"	NUMBER(2)		NOT NULL,
	"REVIEW_CONTENT"	VARCHAR2(1000)		NOT NULL,
	"REVIEW_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "TB_M_REVIEW"."REVIEW_NO" IS '리뷰 번호';

COMMENT ON COLUMN "TB_M_REVIEW"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_M_REVIEW"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_M_REVIEW"."TYPE_REVIEW" IS '좋아요,신고용 타입';

COMMENT ON COLUMN "TB_M_REVIEW"."REVIEW_STAR" IS '리뷰 별점';

COMMENT ON COLUMN "TB_M_REVIEW"."REVIEW_CONTENT" IS '리뷰 내용';

COMMENT ON COLUMN "TB_M_REVIEW"."REVIEW_DATE" IS '리뷰 작성일';

DROP TABLE "TB_SELLER";

CREATE TABLE "TB_SELLER" (
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"SELLER_AUTH"	VARCHAR2(200)		NOT NULL,
	"SELLER_CATEGORY"	VARCHAR2(50)		NULL
);

COMMENT ON COLUMN "TB_SELLER"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_SELLER"."SELLER_AUTH" IS '판매자 인증코드';

COMMENT ON COLUMN "TB_SELLER"."SELLER_CATEGORY" IS '판매 카테고리';

DROP TABLE "TB_M_ABLE";

CREATE TABLE "TB_M_ABLE" (
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"MARKET_A_CNT"	NUMBER(5)		NOT NULL,
	"MARKET_A_DATE"	VARCHAR2(20)		NOT NULL
);

COMMENT ON COLUMN "TB_M_ABLE"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_M_ABLE"."MARKET_A_CNT" IS '상품 판매 가능 횟수';

COMMENT ON COLUMN "TB_M_ABLE"."MARKET_A_DATE" IS '상품 판매 가능 날짜 선택한 날짜 하루씩';

DROP TABLE "TB_LIKE";

CREATE TABLE "TB_LIKE" (
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"LIKE_TYPE"	NUMBER(2)		NOT NULL,
	"LIKE_NO"	NUMBER(10)		NOT NULL,
	"LIKE_GROUP"	NUMBER(10)		NULL,
	"LIKE_STEP"	NUMBER(10)	NULL,
	"LIKE_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "TB_LIKE"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_LIKE"."LIKE_TYPE" IS '좋아요용 타입 글:0/댓글:1/리뷰:3';

COMMENT ON COLUMN "TB_LIKE"."LIKE_NO" IS '글, 리뷰글 번호';

COMMENT ON COLUMN "TB_LIKE"."LIKE_GROUP" IS '해당 글, 댓글, 리뷰의  번호';

COMMENT ON COLUMN "TB_LIKE"."LIKE_STEP" IS '대댓글 번호 댓글:0 / 대댓글:1이상 SEQ';

COMMENT ON COLUMN "TB_LIKE"."LIKE_DATE" IS '좋아요 날짜';

DROP TABLE "TB_MARKET";

CREATE TABLE "TB_MARKET" (
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"TYPE_MARKET"	NUMBER(2)	DEFAULT 2	NOT NULL,
	"MARKET_CATEGORY"	VARCHAR2(32)		NOT NULL,
	"MARKET_TITLE"	VARCHAR2(128)		NOT NULL,
	"MARKET_CONTENT"	VARCHAR2(4000)		NOT NULL,
	"MARKET_PRICE"	NUMBER(10)		NOT NULL,
	"MARKET_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "TB_MARKET"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_MARKET"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_MARKET"."TYPE_MARKET" IS '신고용 타입';

COMMENT ON COLUMN "TB_MARKET"."MARKET_CATEGORY" IS '상품 카테고리';

COMMENT ON COLUMN "TB_MARKET"."MARKET_TITLE" IS '상품 제목';

COMMENT ON COLUMN "TB_MARKET"."MARKET_CONTENT" IS '상품 내용';

COMMENT ON COLUMN "TB_MARKET"."MARKET_PRICE" IS '상품 가격';

COMMENT ON COLUMN "TB_MARKET"."MARKET_DATE" IS '상품 등록일';

DROP TABLE "TB_M_FILE";

CREATE TABLE "TB_M_FILE" (
	"FILE_NO"	NUMBER(10)		NOT NULL,
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"FILE_NAME"	VARCHAR2(500)		NULL,
	"FILE_URL"	VARCHAR2(500)		NULL,
	"FILE_SIZE"	NUMBER(10, 2)		NULL
);

COMMENT ON COLUMN "TB_M_FILE"."FILE_NO" IS '파일 번호';

COMMENT ON COLUMN "TB_M_FILE"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_M_FILE"."FILE_NAME" IS '파일 이름';

COMMENT ON COLUMN "TB_M_FILE"."FILE_URL" IS '파일 url';

COMMENT ON COLUMN "TB_M_FILE"."FILE_SIZE" IS '파일 크기';

DROP TABLE "TB_REPORT";

CREATE TABLE "TB_REPORT" (
	"REPORT_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"REPORT_TYPE"	NUMBER(2)		NOT NULL,
	"REPORT_GROUP"	NUMBER(10)		NOT NULL,
	"REPORT_STEP"	NUMBER(10)	DEFAULT 0	NULL,
	"REPORT_USER"	VARCHAR2(100)		NOT NULL,
	"REPORT_REASON"	VARCHAR2(200)		NOT NULL,
	"REPORT_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL,
	"REPORT_RESULT"	NUMBER(2)	DEFAULT 0	NOT NULL
);

COMMENT ON COLUMN "TB_REPORT"."REPORT_NO" IS '신고 번호';

COMMENT ON COLUMN "TB_REPORT"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_REPORT"."REPORT_TYPE" IS '신고 종류
글:0/댓글:1/마켓글:2/리뷰:3';

COMMENT ON COLUMN "TB_REPORT"."REPORT_GROUP" IS '해당 글, 댓글, 마켓글, 리뷰의 NO';

COMMENT ON COLUMN "TB_REPORT"."REPORT_STEP" IS '대댓글 번호 댓글:0 / 대댓글:1이상 SEQ';

COMMENT ON COLUMN "TB_REPORT"."REPORT_USER" IS '신고 대상';

COMMENT ON COLUMN "TB_REPORT"."REPORT_REASON" IS '신고 사유';

COMMENT ON COLUMN "TB_REPORT"."REPORT_DATE" IS '신고 날짜';

COMMENT ON COLUMN "TB_REPORT"."REPORT_RESULT" IS '디폴트 :0/처리완료:1';

DROP TABLE "TB_QNA";

CREATE TABLE "TB_QNA" (
	"QNA_NO"	NUMBER(10)		NOT NULL,
	"QNA_STEP"	NUMBER(2)	DEFAULT 0	NULL,
	"MARKET_NO"	NUMBER(10)		NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"QNA_TITLE"	VARCHAR2(128)		NOT NULL,
	"QNA_CONTENT"	VARCHAR2(1000)		NOT NULL,
	"QNA_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NULL,
	"QNA_SORT"	NUMBER(2)	DEFAULT 0	NOT NULL
);

COMMENT ON COLUMN "TB_QNA"."QNA_NO" IS '문의 번호';

COMMENT ON COLUMN "TB_QNA"."QNA_STEP" IS '답글 번호 디폴트:0 / 답글:1';

COMMENT ON COLUMN "TB_QNA"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_QNA"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_QNA"."QNA_TITLE" IS '문의 제목';

COMMENT ON COLUMN "TB_QNA"."QNA_CONTENT" IS '문의 내용';

COMMENT ON COLUMN "TB_QNA"."QNA_DATE" IS '문의 날짜';

COMMENT ON COLUMN "TB_QNA"."QNA_SORT" IS '글 유형 구분
디폴트:0/비밀글:1/1:1문의:2/탈퇴:3';

DROP TABLE "TB_HOT";

CREATE TABLE "TB_HOT" (
	"ITEM_NO"	NUMBER(10)		NOT NULL,
	"ITEM_NAME"	VARCHAR2(100)		NOT NULL,
	"ITEM_PRICE"	NUMBER(10)		NOT NULL,
	"ITEM_VALID"	NUMBER(3)		NOT NULL,
	"ITEM_TYPE"	NUMBER(2)		NOT NULL
);

COMMENT ON COLUMN "TB_HOT"."ITEM_NO" IS '아이템 번호';

COMMENT ON COLUMN "TB_HOT"."ITEM_NAME" IS '아이템 이름';

COMMENT ON COLUMN "TB_HOT"."ITEM_PRICE" IS '아이템 가격';

COMMENT ON COLUMN "TB_HOT"."ITEM_VALID" IS '아이템 사용 가능 기간';

COMMENT ON COLUMN "TB_HOT"."ITEM_TYPE" IS '아이템 기능 분류 0:메인배너 / 1:마켓 / 2:상위노출 / 3:강조아이콘 등등';

DROP TABLE "TB_ORDER";

CREATE TABLE "TB_ORDER" (
	"ORDER_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"COUPON_NO"	VARCHAR2(100)		NULL,
	"ORDER_TOTAL"	NUMBER(10)		NOT NULL,
	"ORDER_DISCOUNT"	NUMBER(2)		NOT NULL,
	"ORDER_PAYMENT"	NUMBER(10)		NOT NULL,
	"ORDER_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "TB_ORDER"."ORDER_NO" IS '주문 번호';

COMMENT ON COLUMN "TB_ORDER"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_ORDER"."COUPON_NO" IS '쿠폰번호';

COMMENT ON COLUMN "TB_ORDER"."ORDER_TOTAL" IS '주문 총 금액';

COMMENT ON COLUMN "TB_ORDER"."ORDER_DISCOUNT" IS '회원 할인';

COMMENT ON COLUMN "TB_ORDER"."ORDER_PAYMENT" IS '결제 총 금액';

COMMENT ON COLUMN "TB_ORDER"."ORDER_DATE" IS '주문 날짜';

DROP TABLE "TB_PAY";

CREATE TABLE "TB_PAY" (
	"PAY_NO"	NUMBER(10)		NOT NULL,
	"ORDER_NO"	NUMBER(10)		NOT NULL,
	"USER_ID"	VARCHAR2(100)		NOT NULL,
	"PAY_METHOD"	NUMBER(2)		NOT NULL,
	"PAY_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL,
	"PAY_TOTAL"	NUMBER(10)		NOT NULL,
	"PAY_CHECK"	NUMBER(2)	DEFAULT 0	NOT NULL
);

COMMENT ON COLUMN "TB_PAY"."PAY_NO" IS '결제 번호';

COMMENT ON COLUMN "TB_PAY"."ORDER_NO" IS '주문 번호';

COMMENT ON COLUMN "TB_PAY"."USER_ID" IS '회원식별자';

COMMENT ON COLUMN "TB_PAY"."PAY_METHOD" IS '결제 수단
카드:0/카카페:1/무통:2/가상계좌:3';

COMMENT ON COLUMN "TB_PAY"."PAY_DATE" IS '결제된 날짜';

COMMENT ON COLUMN "TB_PAY"."PAY_TOTAL" IS '결제 총 금액';

COMMENT ON COLUMN "TB_PAY"."PAY_CHECK" IS '결제 성공 여부
디폴트 :0/성공 :1';

DROP TABLE "TB_HOT_DETAIL";

CREATE TABLE "TB_HOT_DETAIL" (
	"ITEM_NO"	NUMBER(10)		NOT NULL,
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"ITEM_EXP"	NUMBER(2)	DEFAULT 0	NOT NULL,
	"ITEM_ORDER_DATE"	VARCHAR2(32)	DEFAULT SYSDATE	NOT NULL
);

COMMENT ON COLUMN "TB_HOT_DETAIL"."ITEM_NO" IS '아이템 번호';

COMMENT ON COLUMN "TB_HOT_DETAIL"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_HOT_DETAIL"."ITEM_EXP" IS '아이템 만료 여부 사용가능:0 / 사용불가:1';

COMMENT ON COLUMN "TB_HOT_DETAIL"."ITEM_ORDER_DATE" IS '아이템 구매날짜';

DROP TABLE "TB_ORDER_DETAIL";

CREATE TABLE "TB_ORDER_DETAIL" (
	"DETAIL_NO"	NUMBER(10)		NOT NULL,
	"ORDER_NO"	NUMBER(10)		NOT NULL,
	"MARKET_NO"	NUMBER(10)		NOT NULL,
	"MARKET_COUNT"	NUMBER(5)		NOT NULL,
	"ORDER_AMOUNT"	NUMBER(10)		NOT NULL
);

COMMENT ON COLUMN "TB_ORDER_DETAIL"."DETAIL_NO" IS '세부내역 번호';

COMMENT ON COLUMN "TB_ORDER_DETAIL"."ORDER_NO" IS '주문 번호';

COMMENT ON COLUMN "TB_ORDER_DETAIL"."MARKET_NO" IS '상품 번호';

COMMENT ON COLUMN "TB_ORDER_DETAIL"."MARKET_COUNT" IS '상품 수량';

COMMENT ON COLUMN "TB_ORDER_DETAIL"."ORDER_AMOUNT" IS '주문 금액';

ALTER TABLE "TB_USER" ADD CONSTRAINT "PK_TB_USER" PRIMARY KEY (
	"USER_ID"
);

ALTER TABLE "TB_U_COUPON" ADD CONSTRAINT "PK_TB_U_COUPON" PRIMARY KEY (
	"COUPON_NO"
);

ALTER TABLE "TB_BOARD" ADD CONSTRAINT "PK_TB_BOARD" PRIMARY KEY (
	"BOARD_NO"
);

ALTER TABLE "TB_M_REVIEW" ADD CONSTRAINT "PK_TB_M_REVIEW" PRIMARY KEY (
	"REVIEW_NO"
);

ALTER TABLE "TB_MARKET" ADD CONSTRAINT "PK_TB_MARKET" PRIMARY KEY (
	"MARKET_NO"
);

ALTER TABLE "TB_REPORT" ADD CONSTRAINT "PK_TB_REPORT" PRIMARY KEY (
	"REPORT_NO"
);

ALTER TABLE "TB_HOT" ADD CONSTRAINT "PK_TB_HOT" PRIMARY KEY (
	"ITEM_NO"
);

ALTER TABLE "TB_ORDER" ADD CONSTRAINT "PK_TB_ORDER" PRIMARY KEY (
	"ORDER_NO"
);

ALTER TABLE "TB_PAY" ADD CONSTRAINT "PK_TB_PAY" PRIMARY KEY (
	"PAY_NO"
);

ALTER TABLE "TB_ORDER_DETAIL" ADD CONSTRAINT "PK_TB_ORDER_DETAIL" PRIMARY KEY (
	"DETAIL_NO"
);

ALTER TABLE "TB_B_FILE" ADD CONSTRAINT "PK_TB_B_FILE" PRIMARY KEY (
	"FILE_NO"
);

ALTER TABLE "TB_M_FILE" ADD CONSTRAINT "PK_TB_M_FILE" PRIMARY KEY (
	"FILE_NO"
);

ALTER TABLE TB_USER ADD CONSTRAINT USER_NICKNAME_UNQ UNIQUE(USER_NICKNAME);

ALTER TABLE TB_USER ADD CONSTRAINT USER_PHONE_UNQ UNIQUE(USER_PHONE);

DROP SEQUENCE ITRYP.TB_U_COUPON_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_U_COUPON_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_BOARD_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_BOARD_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;
  
DROP SEQUENCE ITRYP.TB_B_COMMENT_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_B_COMMENT_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;
  
DROP SEQUENCE ITRYP.TB_B_COMMENT_STEP_SEQ;

CREATE SEQUENCE ITRYP.TB_B_COMMENT_STEP_SEQ
  START WITH 1
  MAXVALUE 999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  NOCACHE
  NOORDER;
  
DROP SEQUENCE ITRYP.TB_MARKET_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_MARKET_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_M_REVIEW_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_M_REVIEW_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_REPORT_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_REPORT_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_QNA_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_QNA_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_ITEM_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_ITEM_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_ORDER_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_ORDER_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_PAY_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_PAY_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;

DROP SEQUENCE ITRYP.TB_ORDER_DETAIL_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_ORDER_DETAIL_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;
  
DROP SEQUENCE ITRYP.TB_B_FILE_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_B_FILE_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;
  
DROP SEQUENCE ITRYP.TB_M_FILE_NO_SEQ;

CREATE SEQUENCE ITRYP.TB_M_FILE_NO_SEQ
  START WITH 0
  MAXVALUE 999999999999999999999999999
  MINVALUE 0
  NOCYCLE
  NOCACHE
  NOORDER;