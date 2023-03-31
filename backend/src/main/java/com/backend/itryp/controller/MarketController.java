package com.backend.itryp.controller;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.MarketLogic;
import com.backend.itryp.logic.OrderLogic;

@RestController
@RequestMapping("/market/*")
public class MarketController {
	
	Logger logger = LogManager.getLogger(MarketController.class);
	
	@Autowired
	MarketLogic marketLogic = null;
	
	
	/**
	 * 마켓구매
	 * 
	 * @param pmap 상품 정보
	 * @return 마켓상품 정보
	 */
	public String getMarketItem(@RequestParam Map<String, Object> pmap) {
		logger.info("getMarketItem 호출");
		String temp = null;
		return temp;
	}
	
	
//	/**
//	 * 공동구매 핫딜
//	 * 
//	 * @param pmap 상품 정보
//	 * @return temp cart 정보
//	 */
//	@PostMapping("cart")
//	public String getCartPage(@RequestParam Map<String, Object> pmap) {
//		logger.info("getCartPage called");
//		String temp = null;
//		return temp;
//	}
//	
	
	/**
	 * 강조아이콘 상위노출
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("deleteCart")
	public String deleteCart(@RequestParam Map<String, Object> pmap) {
		logger.info("deleteCart called");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 장바구니 수량 변경
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("UpdateCart")
	public String UpdateCart(@RequestParam Map<String, Object> pmap) {
		logger.info("UpdateCart called");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 상품 주문 페이지로 이동
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 주문 정보
	 */
	@PostMapping("getOrderPage")
	public String getOrderPage(@RequestParam Map<String, Object> pmap) {
		logger.info("getOrderPage called");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 결제 페이지로 이동
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 주문 및 결제 정보
	 */
	@PostMapping("getPayPage")
	public String getPayPage(@RequestParam Map<String, Object> pmap) {
		log.info("getPayPage called");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 결제 성공 페이지
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("paySuccess")
	public String paySuccess(@RequestParam Map<String, Object> pmap) {
		logger.info("paySuccess called");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 결제 실패 페이지
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("payFail")
	public String payFail(@RequestParam Map<String, Object> pmap) {
		logger.info("payFail called");
		String temp = null;
		return temp;
	}

}
