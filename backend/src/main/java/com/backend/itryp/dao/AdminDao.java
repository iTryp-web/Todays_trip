package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {
	Logger logger = LogManager.getLogger(AdminDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	/**
	 * 판매목록(새로운 문의) 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketQnaList(Map<String, Object> pMap) {
		logger.info("marketQnaList 호출");
		List<Map<String,Object>> rList = null;
		rList = sqlSessionTemplate.selectList("marketQnaList", pMap);
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
		List<Map<String,Object>> rList = null;
		rList = sqlSessionTemplate.selectList("reportList", pMap);
		return rList;
	}
	
	/**
	 * 신고 상태 수정 - 처리완료1
	 * 
	 * @param pMap
	 * @return
	 */
	public int reportUpdate(Map<String, Object> pMap) {
		logger.info("reportUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reportUpdate", pMap);
		return result;
	}
	
	/**
	 * 회원 상태 수정 - 기본0 차단2
	 * 
	 * @param pMap
	 * @return
	 */
	public int userStatusUpdate(Map<String, Object> pMap) {
		logger.info("userStatusUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("userStatusUpdate", pMap);
		return result;
	}
	
	/**
	 * 글 상태 수정 - 기본0 차단1
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardStatusUpdate(Map<String, Object> pMap) {
		logger.info("boardStatusUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardStatusUpdate", pMap);
		return result;
	}
	
	/**
	 * 댓글 상태 수정 - 기본0 차단2=
	 * 
	 * @param pMap
	 * @return
	 */
	public int commentStatusUpdate(Map<String, Object> pMap) {
		logger.info("commentStatusUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("commentStatusUpdate", pMap);
		return result;
	}

	/**
	 * 차단 회원 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banUserList(Map<String, Object> pMap) {
		logger.info("banUserList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("banUserList", pMap);
		return bList;
	}
	
	/**
	 * 차단 글 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banBoardList(Map<String, Object> pMap) {
		logger.info("banBoardList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("banBoardList", pMap);
		return bList;
	}
	
	/**
	 * 차단 댓글 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banCommentList(Map<String, Object> pMap) {
		logger.info("banCommentList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("banCommentList", pMap);
		return bList;
	}

	/**
	 * 차단 글 삭제==
	 * 
	 * @param pMap
	 * @return
	 */
	public int banBoardDelete(Map<String, Object> pMap) {
		logger.info("banBoardDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("banBoardDelete", pMap);
		return result;
	}
	
	/**
	 * 차단 댓글 삭제==
	 * 
	 * @param pMap
	 * @return
	 */
	public int banCommentDelete(Map<String, Object> pMap) {
		logger.info("banCommentDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("banCommentDelete", pMap);
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
		List<Map<String,Object>> rList = null;
		rList = sqlSessionTemplate.selectList("resignList", pMap);
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
		result = sqlSessionTemplate.update("resignUpdate", pMap);
		return result;
	}
	
	/**
	 * 탈퇴(신청) 문의글 상태 수정 처리완료2
	 * 
	 * @param pMap
	 * @return
	 */
	public int resignQnaUpdate(Map<String, Object> pMap) {
		logger.info("resignQnaUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("resignQnaUpdate", pMap);
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
		result = sqlSessionTemplate.update("resignDelete", pMap);
		return result;
	}

	/**
	 * 신고당한 회원 글 출력
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> userBoardDetail(Map<String, Object> pMap) {
		logger.info("userBoardDetail 호출");
		logger.info(pMap);
		List<Map<String,Object>> bList = sqlSessionTemplate.selectList("userBoardDetail", pMap);
		return bList;
	}
	
	/**
	 * 신고당한 회원 댓글 출력
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> userCommentDetail(Map<String, Object> pMap) {
		logger.info("userCommentDetail 호출");
		logger.info(pMap);
		List<Map<String,Object>> bList = sqlSessionTemplate.selectList("userCommentDetail", pMap);
		return bList;
	}
}