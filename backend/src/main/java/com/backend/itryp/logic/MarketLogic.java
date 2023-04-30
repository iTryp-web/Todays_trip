package com.backend.itryp.logic;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	 * - market_no 채번 후 이미지있으면 tb_m_file에 업데이트
	 * @param pMap
	 * @return
	 */
	public int marketInsert(Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		int result = 0;
		result = marketDao.marketInsert(pMap);
		pMap.put("market_no", result);
		// Quill image가 있을 경우
		if(pMap.get("mImageNames") != null) {
			// 작성자가 선택한 이미지의 개수가 n개까지 올 수 있다
			// -> 이미지 개수만큼, 3개에대한 업데이트가 n번 일어나야한다
			// -> xml에서 forEach list로 받기에 해당 부분 처리가 필요함
			result = marketDao.mImageUpdate(mImageNames(pMap));
		}else {pMap.put("mImageNames","\\images\\market\\taj-mahal-g09f47c5ef_1280.jpg" );
			//디폴트이미지 임의대로 넣어놓음-타지마할
			result=marketDao.mImageUpdate(mImageNames(pMap));
			
		}
		return result;
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
		
		/*
		 * // 사용자가 좋아요 누른 리뷰 - 판별용 List<Map<String, Object>> RLikedList =
		 * marketDao.RLikedList(pMap); if(RLikedList != null && RLikedList.size() > 0) {
		 * mList.addAll(RLikedList); }
		 */
		
		return mList;
	}
	/**
	 * 사용자가 좋아요 누른 리뷰 - 판별용
	 * 
	 */
	public List<Map<String, Object>> RLikedList(Map<String, Object> pMap) {
		logger.info("RLikedList 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList= marketDao.RLikedList(pMap);
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
	    result = marketDao.reviewDislike(pMap);
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
//////////////////////////////////////////////
	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 
	 * @param image
	 * @return
	 */
	public String mImageInsert(MultipartFile image) {
		logger.info("mImageInsert 호출");
		// 이미지 업로드가 된 파일에대한 file_name, file_size, file_path 등을 결정해줌 - 서비스계층
		Map<String, Object> pMap = new HashMap<>();
		// 사용자가 선택한 파일 이름 담기
		String filename = null;
		String fullPath = null;
		double d_size = 0.0;
		if(!image.isEmpty()) {
			// filename = image.getOriginalFilename();
			// 같은 파일명으로 업로드되는 경우 덮어쓰기 되는 것을 방지하고자
			// 오리지널 파일명 앞에 날짜와 시간 정보를 활용하여 절대 같은 이름이 발생하지 않도록 처리한다
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHMmmss");
			Calendar time = Calendar.getInstance();
			filename = sdf.format(time.getTime()) + "-" + image.getOriginalFilename().replaceAll(" ", "_");
			String saveFolder = "\\Todays_trip\\backend\\src\\main\\webapp\\pds";
			fullPath = saveFolder + "\\" + filename;
			try {
				// File객체는 파일명을 객체화해주는 클래스 - 생성되었다고해서 실제 파일까지 생성되는 것이 아님
				File file = new File(fullPath);
				byte[] bytes = image.getBytes();
				// outputStream을 반드시 생성해서 파일 정보를 읽은 후 쓰기 처리해줌 -> 완전한 파일이 생성됨
				// BufferedOutputStream은 필터 클래스이지 실제 파일을 쓸 수 없는 객체이고
				// 실제 파일쓰기가 가능한 클래스는 FileOutputStream클래스이다 - 생성자 파라미터에 파일정보를 담는다
				BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file));
				bos.write(bytes);
				// 파일쓰기와 관련된 위변조 방지위해서 사용 후 반드시 닫을 것!
				bos.close();
				// 여기까지는 이미지 파일 쓰기 처리
				// 아래부터는 mblog_file 테이블에 insert될 정보를 초기화해줌
				d_size = Math.floor(file.length()/(1024.00)*10)/10;
				pMap.put("file_name", filename);
				pMap.put("file_url", fullPath);
				pMap.put("file_size", d_size);
				logger.info(d_size);
				int result = marketDao.mImageInsert(pMap);
				logger.info(result);
				logger.info(filename);
				logger.info(fullPath);
			} catch (Exception e) {
				e.printStackTrace();
				logger.info(e.toString());
			}
		}
		// 리턴값으로 선택한 이미지 파일명을 넘겨서 사용자 화면에 첨부된 파일명을 열거해주는데 사용
		String temp = filename;
		return temp;
	}
	/**
	 * 이미지이름, 보더넘버 list형태로 바꾸기
	 * @param pMap
	 * @return
	 */
	private List<Map<String, Object>> mImageNames(Map<String, Object> pMap) {
		logger.info("mImageNames");
		List<Map<String, Object>> pList = new ArrayList<>();
		// pMap.get("imageNames") 리턴형태는 배열 - ["man1.png", "man2.png"]
		HashMap<String, Object> fMap = null;
		String[] imageNames = pMap.get("mImageNames").toString().substring(1, pMap.get("mImageNames").toString().length()-1).split(",");
		for(int i=0; i<imageNames.length; i++) {
			fMap = new HashMap<>();
			fMap.put("file_name", imageNames[i]);
			fMap.put("market_no", pMap.get("market_no"));
			pList.add(fMap);
		}
		return pList;
	}
	//판매글 이미지 삭제
	

	
	
}
