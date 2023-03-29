package com.backend.itryp.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.BoardLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/board/*")
public class BoardController {
	Logger logger = LogManager.getLogger(BoardController.class);
	
	@Autowired
	private BoardLogic boardLogic = null;
	
	/**
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색sort(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardList")
	public String boardList(@RequestParam Map<String, Object> pMap) {
		logger.info("boardList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	/**
	 * 커뮤니티글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardDetail")
	public String boardDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}
	
	/**
	 * 커뮤니티 인기글 모아보기
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardHot")
	public String boardHot(@RequestParam Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardHot(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}
	
	/**
	 * 커뮤니티 글쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardInsert")
	public String boardInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 커뮤니티 글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardUpdate")
	public String boardUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 커뮤니티 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardDelete")
	public String boardDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글 전체 조회 + 정렬(최신|추천)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("replyList")
	public String replyList(@RequestParam Map<String, Object> pMap) {
		logger.info("replyList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.replyList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	/**
	 * 댓글쓰기(댓글, 대댓글)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyInsert")
	public String replyInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyUpdate")
	public String replyUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyDelete")
	public String replyDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 신고 - 글:0 / 댓글:1 / 마켓글:2 / 리뷰:3
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("report")
	public String report(@RequestBody Map<String, Object> pMap) {
		logger.info("report 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.report(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 좋아요 - 글:0 / 댓글:1 / 리뷰:2
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("likeOn")
	public String likeOn(@RequestBody Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.likeOn(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 좋아요 취소
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("likeOff")
	public String likeOff(@RequestBody Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.likeOff(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * Quill 첨부한 이미지 서버에 업로드
	 * @param pMap
	 * @return
	 */
	@PostMapping("imageUpload")
	public String imageUpload(@RequestBody Map<String, Object> pMap) {
		logger.info("imageUpload 호출");
		logger.info(pMap);
		int result = 0;
		//result = boardLogic.imageUpload(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 *  서버에 저장해둔 이미지 url 가져오기
	 * @param pMap
	 * @return
	 */
	@PostMapping("imageGet")
	public String imageGet(@RequestBody Map<String, Object> pMap) {
		logger.info("imageGet 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		//bList = boardLogic.imageGet(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
}