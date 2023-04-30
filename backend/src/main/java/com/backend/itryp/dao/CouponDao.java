package com.backend.itryp.dao;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CouponDao {
	
	Logger logger = LogManager.getLogger(CouponDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public int couponInsert(Map<String, Object> pMap) {
		logger.info("couponInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("couponInsert",pMap);
		return result;
	}

	public int referrerCouponInsert(Map<String, Object> pMap) {
		logger.info("referrerCouponInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("referrerCouponInsert",pMap);
		return result;
	}
}
