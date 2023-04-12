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
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색search(작성자|제목|내용)
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
	 * 커뮤니티 글쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		int board_no = 0; // insert시에 시퀀스로 채번된 속성을 담을 변수 - board_no의 값
		// insert는 반환값이 object
		result = sqlSessionTemplate.insert("boardInsert", pMap);
		if(result == 1) {
			if(pMap.get("board_no") != null) {
				board_no = Integer.parseInt(pMap.get("board_no").toString());
			}
		}
		logger.info("result => " + result);
		logger.info("userGeneratedKeys 프로퍼티 속성값 => " + board_no);
		return board_no;
	}
	
	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 
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
	 * Quill image 수정 - board_no 추가
	 * 
	 * @param pList
	 * @return
	 */
	public int imageUpdate(List<Map<String, Object>> pList) {
		logger.info("imageUpdate 호출");
		logger.info(pList);
		int result = 0;
		result = sqlSessionTemplate.update("imageUpdate", pList);
		return result;
	}

	/**
	 * 커뮤니티 글 수정(조회수 갱신 board_hit:1)
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
	 * Quill image 삭제
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
	 * 댓글 전체 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> replyList(Map<String, Object> pMap) {
		logger.info("replyList 호출");
		logger.info(pMap);
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
	 * 사용자가 좋아요 누른 글, 댓글 조회 - 판별용
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> likedList(Map<String, Object> pMap) {
		logger.info("likedList 호출");
		logger.info(pMap);
		List<Map<String,Object>> lList = null;
		lList = sqlSessionTemplate.selectList("likedList", pMap);
		return lList;
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