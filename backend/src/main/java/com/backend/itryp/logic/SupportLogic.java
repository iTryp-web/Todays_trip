package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.BoardDao;
import com.backend.itryp.dao.SupportDao;

@Service
public class SupportLogic {
	Logger logger = LogManager.getLogger(BoardLogic.class);

	@Autowired
	private SupportDao supportDao = null;
	@Autowired
	private BoardDao boardDao = null;

	/**
	 * 공지사항 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> announceList(Map<String, Object> pMap) {
		logger.info("announceList 호출");
		List<Map<String,Object>> sList = new ArrayList<>();
		sList= supportDao.announceList(pMap);
		return sList;
	}

	/**
	 * 공지사항 작성
	 * 
	 * @param pMap
	 * @return
	 */
	public int announceInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = supportDao.announceInsert(pMap);
		// Quill image가 있을 경우
		if(result > 0 && pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
			int insertImg = supportDao.imageInsert(pMap);
			if(insertImg > 0) {
				logger.info("이미지 업로드 성공");
			} else {				
				logger.info("이미지 업로드 실패");
			}
		}
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
		List<Map<String,Object>> sList = new ArrayList<>();
		sList= supportDao.inquiryList(pMap);
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
		result = supportDao.inquiryInsert(pMap);
		//로직 단계에서 1대1문의에 글 작성중인 사람이 유저인지 관리자인지 판별
		if(pMap.get("reply").equals("답변하기")) {
			pMap.put("qna_step", 1);
		} else {
			pMap.put("qna_step", 0);
		}
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
		result = supportDao.sellerDelInsert(pMap);
		//판매자 탈퇴 글을 작성하는 사람이 판매자인지 판별
		return result;
	}
}
