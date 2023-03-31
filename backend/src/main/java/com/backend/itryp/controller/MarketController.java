package com.backend.itryp.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	 * 마켓홈 구매
	 * 
	 * @param pmap 상품 정보
	 * @return 마켓상품 정보
	 */
	public String getMarketItem(@RequestParam Map<String, Object> pmap) {
		logger.info("getMarketItem 호출");
		String temp = null;
		return temp;
	}

	/**
	 * 강조아이콘 상위노출
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("HotCart")
	public String deleteCart(@RequestParam Map<String, Object> pmap) {
		logger.info("deleteCart called");
		String temp = null;
		return temp;
	}
	
	/**
	 * 마켓글 전체, 카테고리 조회 + 조건검색sort(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("MarketList")
	public String MarketList(@RequestParam Map<String, Object> pMap) {
		logger.info("boardList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = MarketLogic.MarketList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	

}
