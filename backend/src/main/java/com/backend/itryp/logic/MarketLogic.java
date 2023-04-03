package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MarketDao;

@Service
public class MarketLogic {
	 Logger logger = LogManager.getLogger(MarketLogic.class);
	
	@Autowired
	private static MarketDao marketDao = null;

	/**
	 * 마켓 리스트
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		logger.info("marketList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.marketList(pMap);
		return bList;
	}
	/**
	 * 마켓글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.marketDetail(pMap);
		return bList;
	}
	/**
	 * 마켓 글 수정
	 * @param pMap
	 * @return
	 */
	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = marketDao.marketUpdate(pMap);
		return result;
	}
	/**
	 * 마켓 글 삭제-작성자 , 관리자만 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int marketDelete(Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		int result = 0;
		result = marketDao.marketDelete(pMap);
		return result;
	}

	public int reviewInsert(Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		int result = 0;
		result = marketDao.reviewInsert(pMap);
		return result;
	}

	public int reviewUpdate(Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		int result = 0;
		result = marketDao.reviewUpdate(pMap);
		return result;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		int result = 0;
		result = marketDao.reviewDelete(pMap);
		return result;
	}

	public int reviewLike(Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		int result = 0;
		result = marketDao.reviewLike(pMap);
		return result;
	}

	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete호출");
		int result = 0;
		result = marketDao.qnaDelete(pMap);
		return result;
	}

	public int qnaReplyInsert(Map<String, Object> pMap) {
		logger.info("qnaReplyInsert 호출");
		int result = 0;
		result = marketDao.qnaReplyInsert(pMap);
		return result;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		int result = 0;
		result = marketDao.qnaInsert(pMap);
		return result;
	}

	public int marketInsert(Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		int result = 0;
		result = marketDao.marketInsert(pMap);
		return result;
	}
}
