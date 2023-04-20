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
	public List<Map<String, Object>> noticeList(Map<String, Object> pMap) {
		logger.info("noticeList 호출");
		List<Map<String, Object>> sList = null;
		sList = sqlSessionTemplate.selectList("noticeList", pMap);
		return sList;
	}

	/**
	 * 공지사항 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int noticeInsert(Map<String, Object> pMap) {
		logger.info("noticeInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("noticeInsert", pMap);
		return result;
	}

	/**
	 * 공지사항 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int noticeDelete(Map<String, Object> pMap) {
		logger.info("noticeDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("noticeDelete", pMap);
		return result;
	}
	
	/**
	 * 공지사항 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int faqInsert(Map<String, Object> pMap) {
		logger.info("faqInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("faqInsert", pMap);
		return result;
	}
	/**
	 * FAQ 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int faqDelete(Map<String, Object> pMap) {
		logger.info("faqDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("faqDelete", pMap);
		return result;
	}
	
	/**
	 * 1대1 문의/공지사항 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> inquiryList(Map<String, Object> pMap) {
		logger.info("inquiryList 호출");
		List<Map<String, Object>> sList = null;
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
	public int inquiryDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	/**
	 * 1대1문의 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> inquiryDetail(Map<String, Object> pMap) {
		logger.info("inquiryDetail 호출");
		List<Map<String, Object>> sList = null;
		sList = sqlSessionTemplate.selectList("inquiryDetail", pMap);
		return sList;
	}

	/**
	 * 판매자 등록 글 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int sellerRegInsert(Map<String, Object> pMap) {
		logger.info("sellerRegInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("sellerRegInsert", pMap);
		return result;
	}

	/**
	 * 판매자 등록 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int sellerRegDelete(Map<String, Object> pMap) {
		logger.info("sellerRegDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("sellerRegDelete", pMap);
		return result;
	}
	
	/**
	 * Quill image 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> qImageList(Map<String, Object> pMap) {
		logger.info("qImageList 호출");
		List<Map<String, Object>> iList = null;
		iList = sqlSessionTemplate.selectList("qImageList", pMap);
		return iList;
	}
	
	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 
	 * @param pMap
	 * @return
	 */
	public int qImageInsert(Map<String, Object> pMap) {
		logger.info("qImageInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qImageInsert", pMap);
		return result;
	}
	
	/**
	 * Quill image 수정 - board_no 추가
	 * 
	 * @param pList
	 * @return
	 */
	public int qImageUpdate(List<Map<String, Object>> pList) {
		logger.info("qImageUpdate 호출");
		logger.info(pList);
		int result = 0;
		result = sqlSessionTemplate.update("qImageUpdate", pList);
		return result;
	}	
	
	/**
	 * 댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}


}