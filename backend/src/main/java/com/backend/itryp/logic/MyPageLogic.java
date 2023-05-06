package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MyPageDao;

@Service
public class MyPageLogic {
	
	Logger log = LogManager.getLogger(MyPageLogic.class);
	
	@Autowired
	MyPageDao mpDao = null;

	
	/**
	 * getMyBoardList
	 * 
	 * @param pmap 유저 정보
	 * @return rList 글 목록
	 */
	public List<Map<String, Object>> getMyBoardList(Map<String, Object> pmap) {
		log.info("getMyBoardList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.getMyBoardList(pmap);
		return rList;
	}

	/**
	 * getMyRepleList
	 * 
	 * @param pmap 유저 정보
	 * @return rList 댓글 목록
	 */
	public List<Map<String, Object>> getMyRepleList(Map<String, Object> pmap) {
		log.info("getMyRepleList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.getMyRepleList(pmap);
		return rList;
	}

	/**
	 * getMyReviewList
	 * 
	 * @param pmap 유저 정보
	 * @return rList 리뷰 목록
	 */
	public List<Map<String, Object>> getMyReviewList(Map<String, Object> pmap) {
		log.info("getMyReviewList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.getMyReviewList(pmap);
		return rList;
	}

	/**
	 * getMyLikeList
	 * 
	 * @param pmap 유저 정보
	 * @return rList 좋아요 목록
	 */
	public List<Map<String, Object>> getMyLikeList(Map<String, Object> pmap) {
		log.info("getMyLikeList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.getMyLikeList(pmap);
		return rList;
	}
	
	/**
	 * getMyQNAList
	 * 
	 * @param pmap 유저 정보
	 * @return rList 문의글 목록
	 */
	public List<Map<String, Object>> getMyQNAList(Map<String, Object> pmap) {
		log.info("getMyQNAList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.getMyQNAList(pmap);
		return rList;
	}

	/**
	 * 주문 목록 불러오기
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> myOrderList(Map<String, Object> pmap) {
		log.info("myOrderList 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.myOrderList(pmap);
		return rList;
	}

	/**
	 * 주문 상세보기
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> myOrderDetail(Map<String, Object> pmap) {
		log.info("myOrderDetail 호출");
		List<Map<String, Object>> rList = new ArrayList<>();
		rList = mpDao.myOrderDetail(pmap);
		return rList;
	}

	/**
	 * 리뷰 등록
	 * 
	 * @param pMap
	 * @return
	 */
	public int myReviewInsert(Map<String, Object> pMap) {
		log.info("myReviewInsert 호출");
		int result = 0;
		result = mpDao.myReviewInsert(pMap);
		return result;
	}

}
