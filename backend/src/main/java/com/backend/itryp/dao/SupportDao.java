package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupportDao {
	Logger logger = LogManager.getLogger(SupportDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	/**
	 * 공지사항 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> announceList(Map<String, Object> pMap) {
		logger.info("announceList 호출");
		List<Map<String,Object>> sList = null;
		sList = sqlSessionTemplate.selectList("announceList", pMap);
		return sList;
	}

	/**
	 * 공지사항 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int announceInsert(Map<String, Object> pMap) {
		logger.info("announceInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("announceInsert", pMap);
		return result;
	}

	/**
	 * 1대1문의 목록조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> inquiryList(Map<String, Object> pMap) {
		logger.info("inquiryList 호출");
		List<Map<String,Object>> sList = null;
		sList = sqlSessionTemplate.selectList("inquiryList", pMap);
		return sList;
	}

	/**
	 * 1대1문의 글작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int inquiryInsert(Map<String, Object> pMap) {
		logger.info("inquiryInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("inquiryInsert", pMap);
		return result;
	}

	/**
	 * 판매자탈퇴 글 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int sellerDelInsert(Map<String, Object> pMap) {
		logger.info("sellerDelInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("sellerDelInsert", pMap);
		return result;
	}

	/**
	 * 1대1문의 혹은 공지사항 글쓰기 이미지 업로드 - Quill image가 있는 경우
	 * 
	 * @param pMap
	 * @return
	 */
	public int imageInsert(Map<String, Object> pMap) {
		logger.info("imageInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("imageInsert", pMap);
		return result;
	}


}
