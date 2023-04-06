package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MarketDao {
	Logger logger = LogManager.getLogger(MarketDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		logger.info("marketList 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("marketList",pMap);
		return mList;
	}

	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("marketDetail",pMap);
		return mList;
	}
	
	/**
	 * 마켓 글쓰기 
	 * @param pMap
	 * @return
	 */
	public int marketInsert(Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketInsert",pMap);
		return result;
	}
	/**
	 * 마켓 글쓰기 이미지 업로드 - Quill image가 있는 경우
	 * @param pMap
	 * @return
	 */
	public int mImageInsert(Map<String, Object> pMap) {
		logger.info("mImageInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("mImageInsert", pMap);
		return result;
	}
	
	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketUpdate", pMap);
		return result;
	}

	public int marketDelete(Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketDelete", pMap);
		return result;
	}
////////////////////////////////////////////////////////////////
	/**
	 * 리뷰 쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewInsert(Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewInsert", pMap);
		return result;
	}
	/**
	 * 리뷰 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewUpdate(Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewUpdate", pMap);
		return result;
	}
	/**
	 * 리뷰 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewDelete(Map<String, Object> pMap) {
		logger.info("reviewDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewDelete", pMap);
		return result;
	}
	/**
	 * 리뷰 전체 조회-조건정렬
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> reviewList(Map<String, Object> pMap) {
		logger.info("reviewList 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("reviewList", pMap);
		return mList;
	}
	/**
	 * 리뷰 좋아요
	 * 
	 * @param pMap
	 * @return
	 */
	public int reviewLike(Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewLike", pMap);
		return result;
	}
	public int reviewDislike(Map<String, Object> pMap) {
		logger.info("reviewDislike 호출");
		int result = 0;
		result = sqlSessionTemplate.update("reviewDislike", pMap);
	    return result;
	}
	public int reviewLikeCount(Map<String, Object> pMap) {
		logger.info("reviewLikeCount 호출");
		int result = 0;
		result=sqlSessionTemplate.selectOne("reviewLikeCount", pMap);
		return 0;
	}

	public boolean hasUserLikedReview(Map<String, Object> pMap) {
		int count = sqlSessionTemplate.selectOne("hasUserLikedReview", pMap);
	    return count > 0;
	}
	
/////////////////////////////////////////////////
	/**
	 * qna작성
	 * @param pMap
	 * @return
	 */
	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaInsert",pMap);
		return result;
	}
	/**
	 * qna삭제
	 * @param pMap
	 * @return
	 */
	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaDelete",pMap);
		return result;
	}
	/**
	 * qna답글작성
	 * @param pMap
	 * @return
	 */
	public int qnaReplyInsert(Map<String, Object> pMap) {
		logger.info("qnaReplyInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaReplyInsert",pMap);
		return result;
	}

}
