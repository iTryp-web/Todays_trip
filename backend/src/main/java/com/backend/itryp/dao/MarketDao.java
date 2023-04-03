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
		logger.info("marketList 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("marketList",pMap);
		return mList;
	}

	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("marketDetail",pMap);
		return mList;
	}

	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketUpdate", pMap);
		return result;
	}

	public int marketDelete(Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketDelete", pMap);
		return result;
	}

	public int reviewInsert(Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewInsert", pMap);
		return result;
	}

	public int reviewUpdate(Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewUpdate", pMap);
		return result;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		logger.info("reviewDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewDelete", pMap);
		return result;
	}

	public int reviewLike(Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewLike", pMap);
		return result;
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
