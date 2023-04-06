package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MarketDao;

@Service
public class MarketLogic {
	 Logger logger = LogManager.getLogger(MarketLogic.class);
	
	@Autowired
	private static MarketDao marketDao = null;

	/**
	 * 마켓 리스트+조건검색(숙소만, 프로그램만, 가격검색)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		logger.info("marketList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.marketList(pMap);
		return bList;
	}
	/**
	 * 마켓글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.marketDetail(pMap);
		return bList;
	}
	/**
	 * 마켓 글 수정
	 * @param pMap
	 * @return
	 */
	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = marketDao.marketUpdate(pMap);
		return result;
	}
	/**
	 * 마켓 글 삭제-작성자 , 관리자만 삭제버튼보이게
	 * 이미지 파일도 같이 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int marketDelete(Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		int result = 0;
		result = marketDao.marketDelete(pMap);
		// Quill image가 있을 경우
				if(result > 0 && pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
					int deleteImg = marketDao.marketDelete(pMap);
					if(deleteImg > 0) {
						logger.info("이미지 삭제 성공");
					} else {				
						logger.info("이미지 삭제 실패");
					}
				}
				return result;
	}
	/**
	 * 리뷰 글쓰기-한줄리뷰
	 * @param pMap
	 * @return
	 */
	public int reviewInsert(Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		int result = 0;
		result = marketDao.reviewInsert(pMap);
		return result;
	}
	/**
	 * 리뷰 수정
	 * @param pMap
	 * @return
	 */
	public int reviewUpdate(Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		int result = 0;
		result = marketDao.reviewUpdate(pMap);
		return result;
	}
	/**
	 * 리뷰 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewDelete(Map<String, Object> pMap) {
		int result = 0;
		result = marketDao.reviewDelete(pMap);
		return result;
	}
	/**
	 * 리뷰 조회-정렬(높은평점순, 낮은, 추천순, 최신순, 오래된순)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> reviewList(Map<String, Object> pMap) {
		logger.info("reviewList 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList= marketDao.reviewList(pMap);
		return mList;
	}
	/**
	 * 리뷰좋아요
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewLike(Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		int result = 0;
		result = marketDao.reviewLike(pMap);
		return result;
	}
	/**
	 * 문의글, 문의답글쓰기- 구매자문의 qna_step: 0 / 판매자 답글 : 1
	 * 
	 * @param pMap
	 * @return
	 */
	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		int result = 0;
		result = marketDao.qnaInsert(pMap);	
		return result;
	}

	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete호출");
		int result = 0;
		result = marketDao.qnaDelete(pMap);
		return result;
	}

	/**
	 * 마켓 글쓰기 - Quill image 업로드
	 * @param pMap
	 * @return
	 */
	public int marketInsert(Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		int result = 0;
		result = marketDao.marketInsert(pMap);
		// Quill image가 있을 경우
				if(result > 0 && pMap.get("file_name") != null && pMap.get("file_name").toString().length() > 0) {
					int insertImg =marketDao.imageInsert(pMap);
					if(insertImg > 0) {
						logger.info("이미지 업로드 성공");
					} else {				
						logger.info("이미지 업로드 실패");
					}
				}
				return result;
	}
	
}
