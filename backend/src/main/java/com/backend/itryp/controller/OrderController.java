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

import com.backend.itryp.logic.OrderLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/shop/*")
public class OrderController {
	
	Logger log = LogManager.getLogger(OrderController.class);
	
	@Autowired
	OrderLogic odrLogic = null;
	
	/**
	 * 상품 주문 페이지로 이동
	 * 
	 * @param pmap 유저 및 상품 정보
	 * @return temp 쿠폰 정보 등
	 */
	@PostMapping("orderPage")
	public String getOrderPage(@RequestBody Map<String, Object> pmap) {
		log.info("getOrderPage 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.getOrderPage(pmap);
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
	@GetMapping("orderDetail")
	public String getOrderDetail(@RequestParam Map<String, Object> pmap) {
		log.info("getOrderDetail 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.getOrderPage(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 주문 및 결제 정보 DB 등록
	 * 
	 * @param pmap 주문 및 결제 정보
	 * @return 등록 성공 여부
	 */
	@PostMapping("orderUpdate")
	public String orderUpdate(@RequestBody Map<String, Object> pmap) {
		log.info("orderUpdate 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.orderUpdate(pmap);
		Gson g = new Gson();
		temp = g.toJson(list);
		return temp;
	}
	
	
	/**
	 * 주문 취소
	 * 
	 * @param pmap 주문 및 결제 정보
	 * @return 등록 성공 여부
	 */
	@PostMapping("cancelOrder")
	public String cancelOrder(@RequestBody Map<String, Object> pmap) {
		log.info("cancelOrder 호출");
		String temp = null;
		List<Map<String,Object>> list = null;
		list = odrLogic.cancelOrder(pmap);
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
	public String getPayPage(@RequestBody Map<String, Object> pmap) {
		log.info("getPayPage 호출");
		String temp = null;
		return temp;
	}

}
