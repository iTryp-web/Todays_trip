package com.backend.itryp.logic;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.CouponDao;

@Service
public class CouponLogic {
	
	@Autowired
	private CouponDao couponDao = null;
	
	Logger logger = LogManager.getLogger(CouponLogic.class);
	
	public int couponInsert(Map<String, Object> pMap) {
		logger.info("couponInsert 호출");
		logger.info(pMap.toString());
		int result = 0;
		result = couponDao.couponInsert(pMap);
		return result;
	}

	public int referrerCouponInsert(Map<String, Object> pMap) {
		logger.info("referrerCouponInsert 호출");
		logger.info(pMap.toString());
		int result = 0;
		result = couponDao.referrerCouponInsert(pMap);
		return result;
	}

}
