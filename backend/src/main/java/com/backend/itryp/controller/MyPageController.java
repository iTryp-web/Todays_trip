package com.backend.itryp.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.MyPageLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/mypage/*")
public class MyPageController {
	
	Logger log = LogManager.getLogger(MyPageController.class);
	
	@Autowired
	MyPageLogic mpLogic = null;
	
	
	/**
	 * 커뮤니티 내 글 불러오기
	 * 
	 * @param pmap 유저 정보
	 * @return rList 글 목록
	 */
	@PostMapping("boardList")
	public String getMyBoardList(@RequestBody Map<String, Object> pmap) {
		log.info("getMyBoardList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.getMyBoardList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 * 커뮤니티 내 댓글 불러오기
	 * 
	 * @param pmap 유저 정보
	 * @return rList 댓글 목록
	 */
	@PostMapping("repleList")
	public String getMyRepleList(@RequestBody Map<String, Object> pmap) {
		log.info("getMyRepleList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.getMyRepleList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 *  내가 작성한 리뷰글 불러오기
	 * 
	 * @param pmap 유저 정보
	 * @return rList 리뷰 목록
	 */
	@PostMapping("reviewList")
	public String getMyReviewList(@RequestBody Map<String, Object> pmap) {
		log.info("getMyReviewList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.getMyReviewList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 *  내가 좋아요한 글 불러오기
	 * 
	 * @param pmap 유저 정보
	 * @return rList 좋아요 목록
	 */
	@PostMapping("likeList")
	public String getMyLikeList(@RequestBody Map<String, Object> pmap) {
		log.info("getMyLikeList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.getMyLikeList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 *  내가 작성한 QNA 글 불러오기
	 * 
	 * @param pmap 유저 정보
	 * @return rList 문의글 목록
	 */
	@PostMapping("qnaList")
	public String getMyQNAList(@RequestBody Map<String, Object> pmap) {
		log.info("getMyQNAList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.getMyQNAList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 * 주문 목록 불러오기
	 * @param pmap
	 * @return
	 */
	@PostMapping("orderList")
	public String myOrderList(@RequestBody Map<String, Object> pmap) {
		log.info("myOrderList 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.myOrderList(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
	
	/**
	 * 주문 상세보기
	 * @param pmap
	 * @return
	 */
	@PostMapping("orderDetail")
	public String myOrderDetail(@RequestBody Map<String, Object> pmap) {
		log.info("myOrderDetail 호출 " + pmap);
		String temp = null;
		List<Map<String,Object>> rmap = null;
		rmap = mpLogic.myOrderDetail(pmap);
		Gson g = new Gson();
		temp = g.toJson(rmap);
		return temp;
	}
}
