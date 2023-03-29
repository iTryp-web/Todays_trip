package com.backend.itryp.controller;


import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.OrderLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/order/*")
public class OrderController {
	
	Logger log = LogManager.getLogger(OrderController.class);
	
	@Autowired
	OrderLogic odrLogic = null;
	
	
	/**
	 * 아이템 샵 페이지로 이동
	 * 
	 * @param pmap 유저 정보
	 * @return item 정보
	 */
	public String getItemShopPage(@RequestParam Map<String, Object> pmap) {
		log.info("getItemShopPage 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.getItemShopPage(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 장바구니 페이지로 이동
	 * 
	 * @param pmap 유저 정보
	 * @return temp cart 정보
	 */
	@PostMapping("cart")
	public String getCartPage(@RequestParam Map<String, Object> pmap) {
		log.info("getCartPage 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.getCartPage(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 장바구니에 든 상품 삭제
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("deleteCart")
	public String deleteCart(@RequestParam Map<String, Object> pmap) {
		log.info("deleteCart 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.deleteCart(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 장바구니에 상품 담기
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 현재 cart 정보
	 */
	@PostMapping("insertCart")
	public String insertCart(@RequestParam Map<String, Object> pmap) {
		log.info("insertCart 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.insertCart(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
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
		log.info("UpdateCart 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.UpdateCart(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 상품 주문 페이지로 이동
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 쿠폰 정보 등
	 */
	@PostMapping("getOrderPage")
	public String getOrderPage(@RequestParam Map<String, Object> pmap) {
		log.info("getOrderPage 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.getOrderPage(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
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
		log.info("getPayPage 호출");
		String temp = null;
		return temp;
	}
	
	
	/**
	 * 주문 및 결제 정보 DB 등록
	 * 
	 * @param pmap 주문 및 결제 정보
	 * @return 등록 성공 여부
	 */
	@PostMapping("orderUpdate")
	public String orderUpdate(@RequestParam Map<String, Object> pmap) {
		log.info("orderUpdate 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.orderUpdate(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
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
		log.info("paySuccess 호출");
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
		log.info("payFail 호출");
		String temp = null;
		return temp;
	}

}
