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
	 * 오버뷰(새로운 문의, 신고, 신청 표시) - 처리안된것 있으면 마크표시해주는 용도
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> overview(Map<String, Object> pMap) {
		logger.info("overview 호출");
		List<Map<String,Object>> oList = new ArrayList<>();
		pMap.put("new", 1);
		// 새로운 문의
		List<Map<String,Object>> marketQnaList= adminDao.marketQnaList(pMap);
		oList.addAll(marketQnaList);
		// 새로운 신고
		List<Map<String,Object>> reportList = adminDao.reportList(pMap);
		oList.addAll(reportList);
		// 새로운 신청
		List<Map<String,Object>> resignList = adminDao.resignList(pMap);
		oList.addAll(resignList);
		return oList;
	}

	/**
	 * 판매목록(+새로운 문의) 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketQnaList(Map<String, Object> pMap) {
		logger.info("marketQnaList 호출");
		List<Map<String,Object>> rList = new ArrayList<>();
		pMap.put("new", 0);
		rList= adminDao.marketQnaList(pMap);
		return rList;
	}

	/**
	 * 신고 목록 조회(회원4, 글0, 댓글1)
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
	 * 회원, 글, 댓글 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int statusUpdate(Map<String, Object> pMap) {
		logger.info("statusUpdate 호출");
		int result = 0;
		result = adminDao.reportUpdate(pMap); // 신고 상태 수정 - 처리완료1
		int result0 = 0;
		result = adminDao.userStatusUpdate(pMap); // 회원 상태 수정 - 기본0 차단2
		int result1 = 0;
		result = adminDao.boardStatusUpdate(pMap); // 글 상태 수정 - 기본0 차단1
		int result2 = 0;
		result = adminDao.commentStatusUpdate(pMap); // 댓글 상태 수정 - 기본0 차단2
		return result;
	}
	
	/**
	 * 차단 회원, 글, 댓글 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banList(Map<String, Object> pMap) {
		logger.info("banList 호출");
		List<Map<String,Object>> bUserList = new ArrayList<>();
		bUserList= adminDao.banUserList(pMap); // 차단 회원
		List<Map<String,Object>> bBoardList = new ArrayList<>();
		bBoardList= adminDao.banBoardList(pMap); // 차단 글
		List<Map<String,Object>> bCommentList = new ArrayList<>();
		bCommentList= adminDao.banCommentList(pMap); // 차단 댓글
		return bUserList;
	}

	/**
	 * 차단 글, 댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int banDelete(Map<String, Object> pMap) {
		logger.info("banDelete 호출");
		int result = 0;
		result = adminDao.banBoardDelete(pMap); // 글 삭제
		int result1 = 0;
		result = adminDao.banCommentDelete(pMap); // 댓글 삭제
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
	 * 탈퇴(신청) 회원 상태 수정 탈퇴1
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
