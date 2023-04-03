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
import com.backend.itryp.logic.OrderLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/market/*")
public class MarketController {
	
	Logger logger = LogManager.getLogger(MarketController.class);
	
	@Autowired
	MarketLogic marketLogic = null;
	
	/**
	 * 마켓홈 구매 리스트
	 * 강조아이콘 정보 가져오기 포함(조인)
	 * 마켓글 전체검색, 카테고리 조회 + 조건검색sort(작성자|제목|내용)
	 * 
	 * @param pmap 상품 정보
	 * @return 마켓상품 정보
	 */
	@GetMapping
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

	
	

////////////////////////////////////////////////////end of marketHome
	
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
	 * 마켓 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardDelete")
	public String boardDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.marketDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
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
	 * 리뷰추천
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
	

	

}//end of MarketController
