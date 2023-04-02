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

	/**
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색serch(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardList(pMap);
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
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardDetail(pMap);
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
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardHot(pMap);
		return bList;
	}

	/**
	 * 커뮤니티 글쓰기 - Quill image -> 추후 수정 필요(파일이름, url 처리방법)!!
	 * @param pMap
	 * @return
	 */
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = boardDao.boardInsert(pMap);
		// Quill image가 있을 경우
		if(result > 0 && pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
			int insertImg = boardDao.imageInsert(pMap);
			if(insertImg > 0) {
				logger.info("이미지 업로드 성공");
			} else {				
				logger.info("이미지 업로드 실패");
			}
		}
		return result;
	}

	/**
	 * 커뮤니티 글 수정 - Quill image -> 추후 수정 필요!!(비교로직)
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardUpdate(Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		int result = 0;
		result = boardDao.boardUpdate(pMap);
		// 일단 delete한다음 insert -> 추후 수정하기!(이미지 업로드 개수, 넘어오는 방법 등)
		int deleteImg = boardDao.imageDelete(pMap);
		if(deleteImg > 0) {
			logger.info("이미지 삭제 성공");
		} else {				
			logger.info("이미지 삭제 실패");
		}
		// Quill image가 있을 경우
		if(pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
			int insertImg = boardDao.imageInsert(pMap);
			if(insertImg > 0) {
				logger.info("이미지 재업로드 성공");					
			} else {
				logger.info("이미지 재업로드 실패");										
			}
		}
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
		result = boardDao.boardDelete(pMap);
		// Quill image가 있을 경우
		if(result > 0 && pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
			int insertImg = boardDao.imageDelete(pMap);
			if(insertImg > 0) {
				logger.info("이미지 삭제 성공");
			} else {				
				logger.info("이미지 삭제 실패");
			}
		}
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
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.replyList(pMap);
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
		result = boardDao.replyInsert(pMap);
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
		result = boardDao.replyUpdate(pMap);
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
		String c_no = String.valueOf(pMap.get("comment_no"));
		logger.info("삭제 c_no => " + c_no);
		int c_step = 0; // 대댓글의 수
		int c_status = 0; // 대댓글의 상태
		List<Map<String, Object>> judge = boardDao.replyList(pMap);
		// 대댓글 삭제 -> 삭제된 댓글입니다 표시
		if(String.valueOf(pMap.get("comment_step")).equals("1")) {
			pMap.put("comment_content", "삭제된 댓글입니다.");
			pMap.put("comment_status", 1); // 댓글 - 디폴트:0 / 삭제:1 / 차단:2
			result = boardDao.replyUpdate(pMap);
		}
		// 삭제기준 판별위한 for문
		for(int i=0; i<judge.size(); i++) {
			if(String.valueOf(judge.get(i).get("COMMENT_NO")).equals(c_no)) {
				if(!String.valueOf(judge.get(i).get("COMMENT_STEP")).equals("0")) {
					c_step++;
					if(String.valueOf(judge.get(i).get("COMMENT_STATUS")).equals("1")) {
						c_status++;
					}
				}
			}
		}
		logger.info("c_step의 크기 => " + c_step);
		logger.info("c_status의 크기 => " + c_status);
		// 대댓글이 남아있는 댓글 삭제 -> 삭제된 댓글입니다 표시
		if(c_step > 0 && c_step != c_status) {
			pMap.put("comment_content", "삭제된 댓글입니다.");
			pMap.put("comment_status", 1); // 댓글 - 디폴트:0 / 삭제:1 / 차단:2
			result = boardDao.replyUpdate(pMap);
		}
		// 대댓글이 없는 댓글 삭제 -> 바로 삭제(댓글)
		else if(c_step == 0) {
			result = boardDao.replyDelete(pMap);						
		}
		// 대댓글이 모두 삭제된 댓글 삭제 -> 바로 삭제(댓글, 대댓글 모두)
		else if(c_step == c_status) {
			pMap.put("delete_all", 1); // 0이면 특정글 , 1이면 댓글,대댓글 전부 삭제
			result = boardDao.replyDelete(pMap);						
		}
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
		result = boardDao.report(pMap);
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
		result = boardDao.likeOn(pMap);
		int type = (int)pMap.get("like_type");
		if(result > 0) {
			// 좋아요타입 0: 글
			if(type == 0) {
				pMap.put("plus_like", 1);
				pMap.put("board_no", pMap.get("like_group"));
				int like = boardDao.boardUpdate(pMap);
			}
			// 좋아요타입 1: 댓글, 대댓글
			else if(type == 1) {
				pMap.put("plus_like", 1);
				pMap.put("comment_no", pMap.get("like_group"));
				pMap.put("comment_step", pMap.get("like_step"));
				int like = boardDao.replyUpdate(pMap);
			}
		}
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
		result = boardDao.likeOff(pMap);
		int type = (int)pMap.get("like_type");
		if(result > 0) {
			// 좋아요취소 타입 0: 글
			if(type == 0) {
				pMap.put("minus_like", 1);
				pMap.put("board_no", pMap.get("like_group"));
				int like = boardDao.boardUpdate(pMap);
			}
			// 좋아요취소 타입 1: 댓글, 대댓글
			else if(type == 1) {
				pMap.put("minus_like", 1);
				pMap.put("comment_no", pMap.get("like_group"));
				pMap.put("comment_step", pMap.get("like_step"));
				int like = boardDao.replyUpdate(pMap);
			}
		}
		return result;
	}
}