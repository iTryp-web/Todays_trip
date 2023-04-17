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
	 * 신고 글, 회원 목록 조회(글0, 댓글1, 리뷰3)
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
	 * 신고 글, 회원 상태 수정
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
	 * 차단 글, 회원 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> banList(Map<String, Object> pMap) {
		logger.info("banList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("banList", pMap);
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
		result = sqlSessionTemplate.update("banUpdate", pMap);
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
		result = sqlSessionTemplate.update("banDelete", pMap);
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
	 * 탈퇴(신청) 회원 상태 수정
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
	 * 탈퇴 회원 삭제 
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
}