package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardDao {
	Logger logger = LogManager.getLogger(BoardDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("boardList", pMap);
		return bList;
	}

	public List<Map<String, Object>> boardDetail(Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		List<Map<String,Object>> bList = null;
		// bList = sqlSessionTemplate.selectList("boardDetail", pMap);
		return bList;
	}

	public List<Map<String, Object>> boardHot(Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		List<Map<String,Object>> bList = null;
		// bList = sqlSessionTemplate.selectList("boardHot", pMap);
		return bList;
	}

	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("boardInsert", pMap);
		return result;
	}

	public int boardUpdate(Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("boardUpdate", pMap);
		return result;
	}

	public int boardDelete(Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("boardDelete", pMap);
		return result;
	}

	public List<Map<String, Object>> replyList(Map<String, Object> pMap) {
		logger.info("replyList 호출");
		List<Map<String,Object>> bList = null;
		// bList = sqlSessionTemplate.selectList("replyList", pMap);
		return bList;
	}

	public int replyInsert(Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("replyInsert", pMap);
		return result;
	}

	public int replyUpdate(Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("replyUpdate", pMap);
		return result;
	}

	public int replyDelete(Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("replyDelete", pMap);
		return result;
	}

	public int report(Map<String, Object> pMap) {
		logger.info("report 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("report", pMap);
		return result;
	}

	public int likeOn(Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("likeOn", pMap);
		return result;
	}

	public int likeOff(Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		int result = 0;
		// result = sqlSessionTemplate.update("likeOff", pMap);
		return result;
	}
}