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

	/**
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색serch(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("boardList", pMap);
		return bList;
	}

	/**
	 * 커뮤니티글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardDetail(Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("boardDetail", pMap);
		return bList;
	}

	/**
	 * 커뮤니티 인기글 모아보기
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardHot(Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("boardHot", pMap);
		return bList;
	}

	/**
	 * 커뮤니티 글쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardInsert", pMap);
		return result;
	}
	
	/**
	 * 커뮤니티 글쓰기 이미지 업로드 - Quill image가 있는 경우
	 * @param pMap
	 * @return
	 */
	public int imageInsert(Map<String, Object> pMap) {
		logger.info("imageInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("imageInsert", pMap);
		return result;
	}

	/**
	 * 커뮤니티 글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardUpdate(Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardUpdate", pMap);
		return result;
	}
	
	/**
	 * 커뮤니티 글수정 첨부이미지 삭제 - Quill image를 수정 -> 삭제 후 재생성
	 * 
	 * @param pMap
	 * @return
	 */
	public int imageDelete(Map<String, Object> pMap) {
		logger.info("imageDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("imageDelete", pMap);
		return result;
	}

	/**
	 * 커뮤니티 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardDelete(Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardDelete", pMap);
		return result;
	}

	/**
	 * 댓글 전체 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> replyList(Map<String, Object> pMap) {
		logger.info("replyList 호출");
		List<Map<String,Object>> bList = null;
		bList = sqlSessionTemplate.selectList("replyList", pMap);
		return bList;
	}

	/**
	 * 댓글, 대댓글 쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyInsert(Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("replyInsert", pMap);
		return result;
	}

	/**
	 * 댓글, 대댓글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyUpdate(Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("replyUpdate", pMap);
		return result;
	}

	/**
	 * 댓글, 대댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyDelete(Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("replyDelete", pMap);
		return result;
	}

	/**
	 * 신고 - 글:0 / 댓글:1 / 마켓글:2 / 리뷰:3(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int report(Map<String, Object> pMap) {
		logger.info("report 호출");
		int result = 0;
		result = sqlSessionTemplate.update("report", pMap);
		return result;
	}

	/**
	 * 좋아요 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int likeOn(Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		int result = 0;
		result = sqlSessionTemplate.update("likeOn", pMap);
		return result;
	}

	/**
	 * 좋아요 취소 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int likeOff(Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		int result = 0;
		result = sqlSessionTemplate.update("likeOff", pMap);
		return result;
	}
}