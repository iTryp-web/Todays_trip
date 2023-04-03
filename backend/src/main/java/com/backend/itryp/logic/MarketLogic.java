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
		logger.info("boardDetail 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.marketDetail(pMap);
		return bList;
	}
	/**
	 * 마켓 - Quill image -> 추후 수정 필요(파일이름, url 처리방법)!!
	 * @param pMap
	 * @return
	 */
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
		// TODO Auto-generated method stub
		return 0;
	}

	public int qnaReplyInsert(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int marketInsert(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}
}
