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
		// 새로운 문의
		List<Map<String,Object>> marketQnaList= adminDao.marketQnaList(pMap);
		oList.addAll(marketQnaList);
		// 새로운 신고
		List<Map<String,Object>> reportList = adminDao.reportList(pMap);
		oList.addAll(reportList);
		// 새로운 신청
		List<Map<String,Object>> resignList = adminDao.resignList(pMap);
		oList.addAll(resignList);
		// 차단 목록
		List<Map<String,Object>> banUserList = adminDao.banUserList(pMap);
		oList.addAll(banUserList);
		List<Map<String,Object>> banBoardList = adminDao.banBoardList(pMap);
		oList.addAll(banBoardList);
		List<Map<String,Object>> banCommentList = adminDao.banCommentList(pMap);
		oList.addAll(banCommentList);
		return oList;
	}
	
	/**
	 * 회원, 글, 댓글 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int statusUpdate(Map<String, Object> pMap) {
		logger.info("statusUpdate 호출");
		logger.info(pMap);
		int result = 0;
		if(pMap.get("report_no") != null) {
			result = adminDao.reportUpdate(pMap); // 신고 상태 수정 - 기본0 차단1 취소2			
		}
		if(Integer.parseInt(pMap.get("report_type").toString()) == 0) {
			int resultBoard = adminDao.boardStatusUpdate(pMap); // 글 상태 수정 - 기본0 차단1	
			logger.info("resultBoard=> " + resultBoard);
			result++;
		} else if(Integer.parseInt(pMap.get("report_type").toString()) == 1) {
			int resultComment = adminDao.commentStatusUpdate(pMap); // 댓글 상태 수정 - 기본0 차단2			
			logger.info("resultComment=> " + resultComment);
			result++;
		} else if(Integer.parseInt(pMap.get("report_type").toString()) == 4) {
			int resultUser = adminDao.userStatusUpdate(pMap); // 회원 상태 수정 - 기본0 차단2
			logger.info("resultUser=> " + resultUser);
			result++;
		}
		return result;
	}

	/**
	 * 차단 글, 댓글 삭제==
	 * 
	 * @param pMap
	 * @return
	 */
	public int banDelete(Map<String, Object> pMap) {
		logger.info("banDelete 호출");
		int result = 0;
		if(Integer.parseInt(pMap.get("report_type").toString()) == 0) {
			int resultBoard = adminDao.banBoardDelete(pMap); // 글 삭제	
			logger.info("resultBoard=> " + resultBoard);
			result++;
		} else if(Integer.parseInt(pMap.get("report_type").toString()) == 1) {
			int resultComment = adminDao.banCommentDelete(pMap); // 댓글 삭제			
			logger.info("resultComment=> " + resultComment);
			result++;
		} else if(Integer.parseInt(pMap.get("report_type").toString()) == 4) {
			int resultUser = adminDao.resignDelete(pMap); // 회원 삭제
			logger.info("resultUser=> " + resultUser);
			result++;
		}
		return result;
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
		if(pMap.get("qna_step") != null) {
			int resultStep = adminDao.resignQnaUpdate(pMap);
			logger.info("resultStep=> " + resultStep);
		}
		return result;
	}

	/**
	 * 탈퇴 회원 삭제 ==
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

	/**
	 * 신고당한 회원 글, 댓글 출력
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> userDetail(Map<String, Object> pMap) {
		logger.info("userDetail 호출");
		List<Map<String,Object>> uList = new ArrayList<>();
		List<Map<String,Object>> btList = adminDao.userBoardDetail(pMap);
		uList.addAll(btList);
		List<Map<String,Object>> cList = adminDao.userCommentDetail(pMap);
		uList.addAll(cList);
		return uList;
	}
}
