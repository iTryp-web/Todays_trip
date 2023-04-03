package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MarketDao {
	Logger logger = LogManager.getLogger(MarketDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}

	public int marketUpdate(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int marketDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewInsert(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewUpdate(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewLike(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}
	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaDelete",pMap);
		return result;
	}

	public int qnaReplyInsert(Map<String, Object> pMap) {
		logger.info("qnaReplyInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaReplyInsert",pMap);
		return result;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaInsert",pMap);
		return result;
	}

	public int marketInsert(Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketInsert",pMap);
		return result;
	}

}
