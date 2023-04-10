package com.backend.itryp.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.MarketLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/market/*")
public class MarketController {
	
	Logger logger = LogManager.getLogger(MarketController.class);
	
	@Autowired
	MarketLogic marketLogic = null;
	
	/**
	 * 마켓 리스트
	 * 강조아이콘 정보 가져오기 포함(조인)
	 * 마켓글 전체검색, 카테고리 조회(한인택시(공항픽업), 투어프로그램, 숙소, 렌트카) + 조건검색sort(숙소만|프로그램만|가격)
	 * 
	 * @param pmap 상품 정보
	 * @return 마켓상품 정보
	 */
	@GetMapping("marketList")
	public String marketList(@RequestParam Map<String, Object> pMap) {
		logger.info("marketList 호출");
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.marketList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	/**
	 * 마켓글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("marketDetail")
	public String marketDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.marketDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}

	
	

////////////////////////////////////////////////////
	
	/**
	 * 마켓 새글쓰기-말머리, 재목, 가격옵션,내용,글등록,임시저장,강조아이템
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketInsert")
	public String marketInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		logger.info(pMap);
		int result = 0;
		result =marketLogic.marketInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 마켓 글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketUpdate")
	public String marketUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.marketUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 마켓 글 삭제-작성자, 관리자만 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketDelete")
	public String marketDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		logger.info(pMap);
		if(pMap.get("market_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int market_no = Integer.parseInt(pMap.get("market_no").toString());
			pMap.put("market_no", market_no);
		}
		int result = 0;
		result = marketLogic.marketDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 신고 - 글:0(Board에서 처리) / 댓글:1 / 마켓글:2 / 마켓리뷰:3
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("mReport")
	public String mReport(@RequestBody Map<String, Object> pMap) {
		logger.info("mReport 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.mReport(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
////////////////////////////////////////////////////
	/**
	 * 리뷰보기 - 정렬(높은 평점순, 낮은 평점순, 추천순, 최신순, 오래된 순)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("reviewList")
	public String reviewList(@RequestParam Map<String, Object> pMap) {
		logger.info("reviewList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.reviewList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	/**
	 *리뷰 쓰기 - 별점, 한줄리뷰
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewInsert")
	public String reviewInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 리뷰 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewUpdate")
	public String reviewUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 리뷰 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewDelete")
	public String reviewDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 리뷰 좋아요
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewLike")
	public String reviewLike(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewLike(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 리뷰좋아요 취소 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewDislike")
	public String reviewDislike(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewDislike 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewDislike(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
//////////////////////////////////////////////////////////////
	/**
	 * 문의글 쓰기 - 구매자문의 step: 0 / 판매자 답글 step: 1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("qnaInsert")
	public String qnaInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		logger.info(pMap);
		int result = 0;
		result =marketLogic.qnaInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 문의 삭제- 구매자문의 step: 0 / 판매자 답글 step: 1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("qnaDelete")
	public String qnaDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("qnaDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.qnaDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 문의글 보기
	 * 
	 * @param pMap 상품 정보
	 * @return 마켓상품 정보
	 */
	@GetMapping("qnaList")
	public String qnaList(@RequestParam Map<String, Object> pMap) {
		logger.info("qnaList 호출");
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.qnaList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
}//end of MarketController
