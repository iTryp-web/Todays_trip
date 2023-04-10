package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.HashMap;
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
	private MarketDao marketDao = null;

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
					int insertImg =marketDao.mImageInsert(pMap);
					if(insertImg > 0) {
						logger.info("이미지 업로드 성공");
					} else {				
						logger.info("이미지 업로드 실패");
					}
				}
				return result;
	}
	/**
	 * 이미지이름, 보더넘버 list형태로 바꾸기
	 * @param pMap
	 * @return
	 */
	private List<Map<String, Object>> mImageNames(Map<String, Object> pMap) {
		logger.info("mImageNames");
		List<Map<String, Object>> pList = new ArrayList<>();
		// pMap.get("mImageNames") 리턴형태는 배열 - ["man1.png", "man2.png"]
		HashMap<String, Object> fMap = null;
		String[] imageNames = pMap.get("mImageNames").toString().substring(1, pMap.get("imageNames").toString().length()-1).split(",");
		for(int i=0; i<imageNames.length; i++) {
			fMap = new HashMap<>();
			fMap.put("file_name", imageNames[i]);
			fMap.put("board_no", pMap.get("board_no"));
			pList.add(fMap);
		}
		return pList;
	}
	/**
	 * 마켓 글 수정+이미지 수정
	 * @param pMap
	 * @return
	 */
	public int marketUpdate(Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		int result = 0;
		result = marketDao.marketUpdate(pMap);
		//이미지수정
		// Quill image가 있을 경우
				if(pMap.get("mImageNames") != null) {
					// 작성자가 선택한 이미지의 개수가 n개까지 올 수 있다
					// -> 이미지 개수만큼, 3개에대한 업데이트가 n번 일어나야한다
					// -> xml에서 forEach list로 받기에 해당 부분 처리가 필요함
					result = marketDao.mImageUpdate(mImageNames(pMap));
				}
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
				if(result > 0) {
					int mImageDelete = marketDao.mImageDelete(pMap);
					if(mImageDelete > 0) {
						logger.info("이미지 삭제 성공");
					} else {				
						logger.info("이미지 삭제 실패 혹은 삭제할 파일이 없음");
					}
				}
				return result;
	}
	/**
	 * 신고-1판매글, 2리뷰
	 * @param pMap
	 * @return
	 */
	public int mReport(Map<String, Object> pMap) {
		logger.info("mReport 호출");
		int result = 0;
		result = marketDao.mReport(pMap);
		return result;
	}
/////////////////////////////////////////////////////////
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
	 * 리뷰 좋아요 취소
	 * @param pMap
	 * @return
	 */
	public int reviewDislike(Map<String, Object> pMap) {
	    logger.info("reviewDislike 호출");
	    int result = 0;
	    int likeCount = marketDao.reviewLikeCount(pMap); // 해당 리뷰의 현재 좋아요 수 가져오기
	    if (likeCount >= 1) { // 해당 리뷰의 좋아요 수가 1 이상
	        result = marketDao.reviewDislike(pMap); // 리뷰의 좋아요 수 감소
	    }
	    return result;
	}
///////////////////////////////////////////////////////////////

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
	/**
	 * qna삭제
	 * @param pMap
	 * @return
	 */
	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete호출");
		int result = 0;
		result = marketDao.qnaDelete(pMap);
		return result;
	}
	/**
	 * qna 조회
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> qnaList(Map<String, Object> pMap) {
		logger.info("qnaList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= marketDao.qnaList(pMap);
		return bList;
	}
	

	
	
}
