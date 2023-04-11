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
	/**
	 * 판매글 리스트
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		logger.info("marketList 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("marketList",pMap);
		return mList;
	}
	/**
	 * 판매글 상세보기
	 * @param pMap
	 * @return
	 */
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
	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 이미지 리스트에서 이름 
	 * @param pMap
	 * @return
	 */
	public int mImageNames(Map<String, Object> pMap) {
		logger.info("mImageNames 호출");
		logger.info(pMap);
		int result = 0;
		result = sqlSessionTemplate.update("mImageNames", pMap);
		return result;
	}
	/**
	 * 마켓 판매글 수정
	 * @param pMap
	 * @return
	 */
	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketUpdate", pMap);
		return result;
	}
	/**
	 * 마켓 판매글 이미지 수정 
	 * @param mImageNames-리스트임
	 * @return
	 */
	public int mImageUpdate(List<Map<String, Object>> mImageNames) {
		logger.info("mImageUpdate 호출");
		logger.info(mImageNames);
		int result = 0;
		result = sqlSessionTemplate.update("mImageUpdate", mImageNames);
		return result;
	}
	/**
	 * 마켓 판매글 삭제 + 이미지도 삭제
	 * @param pMap
	 * @return
	 */
	public int marketDelete(Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("marketDelete", pMap);
		return result;
	}
	public int mImageDelete(Map<String, Object> pMap) {
		logger.info("mImageDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("mImageDelete", pMap);
		return result;
	}
	/**
	 * 신고
	 * @param pMap
	 * @return
	 */
	public int mReport(Map<String, Object> pMap) {
		logger.info("mReport 호출");
		int result = 0;
		result = sqlSessionTemplate.update("mReport", pMap);
		return result;
	}
////////////////////////////////////////////////////////////////
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
	/**
	 * 리뷰 좋아요 취소
	 * @param pMap
	 * @return
	 */
	public int reviewDislike(Map<String, Object> pMap) {
		logger.info("reviewDislike 호출");
		int result = 0;
		result = sqlSessionTemplate.delete("reviewDislike", pMap);
	    return result;
	}
	/**
	 * 리뷰 갯수세기 안쓸수도...
	 * @param pMap
	 * @return
	 */
	public int reviewLikeCount(Map<String, Object> pMap) {
		logger.info("reviewLikeCount 호출");
		int result = 0;
		result=sqlSessionTemplate.selectOne("reviewLikeCount", pMap);
		return 0;
	}
/////////////////////////////////////////////////
	/**
	 * qna작성-qna_step이 0:문의글 1:문의답글
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
	 * 문의글 보기
	 * 
	 * @param pMap 상품 정보
	 * @return 마켓상품 정보
	 */
	public List<Map<String, Object>> qnaList(Map<String, Object> pMap) {
		logger.info("qnaList 호출");
		List<Map<String,Object>> mList = null;
		mList = sqlSessionTemplate.selectList("qnaList", pMap);
		return mList;
	}

}
