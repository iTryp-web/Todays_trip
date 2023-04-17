package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.AdminDao;

@Service
public class AdminLogic {
	Logger logger = LogManager.getLogger(AdminLogic.class);
	
	@Autowired
	private AdminDao adminDao = null;

	/**
	 * 오버뷰(신고글'회원, 차단글'회원, 탈퇴회원) - 처리안된것 있으면 마크표시해주는 용도
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> overview(Map<String, Object> pMap) {
		logger.info("overview 호출");
		List<Map<String,Object>> oList = new ArrayList<>();
		//oList= adminDao.overview(pMap);
		return oList;
	}

	/**
	 * 신고 글, 회원 목록 조회(글0, 댓글1, 리뷰3)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> reportList(Map<String, Object> pMap) {
		logger.info("reportList 호출");
		List<Map<String,Object>> rList = new ArrayList<>();
		rList= adminDao.reportList(pMap);
		return rList;
	}

	/**
	 * 신고 글, 회원 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int reportUpdate(Map<String, Object> pMap) {
		logger.info("reportUpdate 호출");
		int result = 0;
		result = adminDao.reportUpdate(pMap);
		return result;
	}
	
	/**
	 * 차단 글, 회원 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banList(Map<String, Object> pMap) {
		logger.info("banList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= adminDao.banList(pMap);
		return bList;
	}
	
	/**
	 * 차단 글, 회원 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int banUpdate(Map<String, Object> pMap) {
		logger.info("banUpdate 호출");
		int result = 0;
		result = adminDao.banUpdate(pMap);
		return result;
	}

	/**
	 * 차단 글, 회원 삭제(탈퇴)
	 * 
	 * @param pMap
	 * @return
	 */
	public int banDelete(Map<String, Object> pMap) {
		logger.info("banDelete 호출");
		int result = 0;
		result = adminDao.banDelete(pMap);
		return result;
	}

	/**
	 * 탈퇴(신청) 회원 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> resignList(Map<String, Object> pMap) {
		logger.info("resignList 호출");
		List<Map<String,Object>> rList = new ArrayList<>();
		rList= adminDao.resignList(pMap);
		return rList;
	}

	/**
	 * 탈퇴(신청) 회원 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int resignUpdate(Map<String, Object> pMap) {
		logger.info("resignUpdate 호출");
		int result = 0;
		result = adminDao.resignUpdate(pMap);
		return result;
	}

	/**
	 * 탈퇴 회원 삭제 
	 * 
	 * @param pMap
	 * @return
	 */
	public int resignDelete(Map<String, Object> pMap) {
		logger.info("resignDelete 호출");
		int result = 0;
		result = adminDao.resignDelete(pMap);
		return result;
	}
}
