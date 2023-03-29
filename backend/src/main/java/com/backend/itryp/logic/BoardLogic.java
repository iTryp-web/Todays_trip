package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.BoardDao;

@Service
public class BoardLogic {
	Logger logger = LogManager.getLogger(BoardLogic.class);
	
	@Autowired
	private BoardDao boardDao = null;

	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardList(pMap);
		return bList;
	}

	public List<Map<String, Object>> boardDetail(Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardDetail(pMap);
		return bList;
	}

	public List<Map<String, Object>> boardHot(Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardHot(pMap);
		return bList;
	}

	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = boardDao.boardInsert(pMap);
		return result;
	}

	public int boardUpdate(Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		int result = 0;
		result = boardDao.boardUpdate(pMap);
		return result;
	}

	public int boardDelete(Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		int result = 0;
		result = boardDao.boardDelete(pMap);
		return result;
	}

	public List<Map<String, Object>> replyList(Map<String, Object> pMap) {
		logger.info("replyList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.replyList(pMap);
		return bList;
	}

	public int replyInsert(Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		int result = 0;
		result = boardDao.replyInsert(pMap);
		return result;
	}

	public int replyUpdate(Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		int result = 0;
		result = boardDao.replyUpdate(pMap);
		return result;
	}

	public int replyDelete(Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		int result = 0;
		result = boardDao.replyDelete(pMap);
		return result;
	}

	public int report(Map<String, Object> pMap) {
		logger.info("report 호출");
		int result = 0;
		result = boardDao.report(pMap);
		return result;
	}

	public int likeOn(Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		int result = 0;
		result = boardDao.likeOn(pMap);
		return result;
	}

	public int likeOff(Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		int result = 0;
		result = boardDao.likeOff(pMap);
		return result;
	}

	public int uploadImage(Map<String, Object> pMap) {
		logger.info("uploadImage 호출");
		int result = 0;
		result = boardDao.uploadImage(pMap);
		return result;
	}

	public List<Map<String, Object>> getImage(Map<String, Object> pMap) {
		logger.info("getImage 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.getImage(pMap);
		return bList;
	}
}