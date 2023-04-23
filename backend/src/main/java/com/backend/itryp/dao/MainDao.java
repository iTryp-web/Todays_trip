package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MainDao {
	Logger logger = LogManager.getLogger(MainDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	/**
	 * 마켓 인기글(판매량높은순)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> mainMarketHot(Map<String, Object> pMap) {
		logger.info("mainMarketHot 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("mainMarketHot", pMap);
		return mList;
	}

	/**
	 * 마켓 신규글
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> mainMarketNew(Map<String, Object> pMap) {
		logger.info("mainMarketNew 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("mainMarketNew", pMap);
		return mList;
	}

	/**
	 * 커뮤 인기글(좋아요 5개이상 혹은 조회수 30이상)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> mainBoardHot(Map<String, Object> pMap) {
		logger.info("mainBoardHot 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("mainBoardHot", pMap);
		return bList;
	}

	/**
	 * 커뮤 신규글
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> mainBoardNew(Map<String, Object> pMap) {
		logger.info("mainBoardNew 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("mainBoardNew", pMap);
		return bList;
	}
}