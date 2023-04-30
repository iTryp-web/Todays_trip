package com.backend.itryp.controller;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.CouponLogic;

@RestController
@RequestMapping("/coupon/*")
public class CouponController {
	Logger logger = LogManager.getLogger(CouponController.class);

	
	@Autowired
	private CouponLogic couponLogic = null;
	
	
	/***************
	 * 쿠폰 등록
	 * @param pMap
	 * @return
	 ***************/
	@PostMapping("couponInsert")
	public String couponInsert(@RequestBody Map<String,Object> pMap) {
		logger.info("couponInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = couponLogic.couponInsert(pMap);
		return String.valueOf(result);
	}
	
	/***************
	 * 추천인 쿠폰 등록
	 * @param pMap
	 * @return
	 ***************/
	@PostMapping("referrerCouponInsert")
	public String referrerCouponInsert(@RequestBody Map<String,Object> pMap) {
		logger.info("referrerCouponInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = couponLogic.referrerCouponInsert(pMap);
		return String.valueOf(result);
	}
}
