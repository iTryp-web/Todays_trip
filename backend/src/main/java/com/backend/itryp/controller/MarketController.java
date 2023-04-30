package com.backend.itryp.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.itryp.logic.MarketLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/market/*")
public class MarketController {
	
	Logger logger = LogManager.getLogger(MarketController.class);
	
	@Autowired
	MarketLogic marketLogic = null;
	
	/**
	 * 마켓 리스트
	 * 강조아이콘 정보 가져오기 포함(조인)
	 * 마켓글 전체검색, 카테고리 조회(한인택시(공항픽업), 투어프로그램, 숙소, 렌트카) + 조건검색sort(숙소만|프로그램만|가격)
	 * 
	 * @param pmap 상품 정보
	 * @return 마켓상품 정보
	 */
	@GetMapping("marketList")
	public String marketList(@RequestParam Map<String, Object> pMap) {
		logger.info("marketList 호출");
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.marketList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	/**
	 * 마켓글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("marketDetail")
	public String marketDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("marketDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.marketDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}

	
	

////////////////////////////////////////////////////
	
	/**
	 * 마켓 새글쓰기-말머리, 재목, 가격옵션,내용,글등록,임시저장,강조아이템
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketInsert")
	public String marketInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("marketInsert 호출");
		logger.info(pMap);
		int result = 0;
		result =marketLogic.marketInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 마켓 글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketUpdate")
	public String marketUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("marketUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.marketUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 마켓 글 삭제-작성자, 관리자만 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("marketDelete")
	public String marketDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("marketDelete 호출");
		logger.info(pMap);
		if(pMap.get("market_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int market_no = Integer.parseInt(pMap.get("market_no").toString());
			pMap.put("market_no", market_no);
		}
		int result = 0;
		result = marketLogic.marketDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 
	 * @param mRequest
	 * @param image
	 * @return
	 */
	@PostMapping("mUploadImage")
	public String uploadImage(@RequestParam(value = "image", required = false) MultipartFile image) {
		logger.info("mImageUpload 호출");
		String filename = marketLogic.mImageInsert(image);
		return filename;
	}

	/**
	 * 저장해둔 이미지 불러오기
	 * 
	 * @param req
	 * @param res
	 * @return
	 */
	@GetMapping("mGetImage")
	public Object getImage(HttpServletRequest req, HttpServletResponse res) {
		// imageName 정보는 공통코드로 제공된 QuillEditor.jsx에서 파라미터로 넘어오는 값임
		// imageUpload 메소드에서는 업로드된 파일 정보(파일명, 파일크기)가 리턴됨
		String b_file = req.getParameter("imageName"); // get방식으로 넘어옴
		logger.info("imageGet 호출 성공===>" + b_file); // XXX.png
		// 톰캣 서버의 물리적인 위지 정보
		String filePath = "\\Todays_trip\\backend\\src\\main\\webapp\\pds";
		String fname = b_file;
		logger.info("b_file: 8->euc" + b_file);
		// File은 내용까지 복제되는 것은 아니고 파일명만 객체화해주는 클래스이다
		File file = new File(filePath, b_file.trim());
		// 실제 업로드된 파일에 대한 마임타입을 출력해줌
		String mimeType = req.getServletContext().getMimeType(file.toString());
		logger.info(mimeType); // image, video, text
		if (mimeType == null) { // 마임타입이 널이면 아래의 속성값으로 마임타입을 설정
			// -> 브라우저는 해석이 가능한 마임타입은 페이지 로딩 처리,
			// 해석이 불가능한 마임타입은 다운로드함
			// 강제로 다운로드 처리를 위한 마임타입 변경
			// -> 브라우저에서 해석가능한 마임타입의 경우 화면에 그대로 출력되니까 그걸 방지하기위해
			res.setContentType("application/octet-stream");
		}
		// 다운로드되는 파일 이름 담기
		String downName = null;
		// 위 File 객체에서 생성된 객체에 내용을 읽기위한 클래스 선언
		FileInputStream fis = null;
		// 응답으로 나갈 정보가 웹 서비스에 처리되어야 하기에 사용한 객체
		ServletOutputStream sos = null;
		try {
			if (req.getHeader("user-agent").indexOf("MSIE") == -1) {
				downName = new String(b_file.getBytes("UTF-8"), "8859_1");
			} else {
				downName = new String(b_file.getBytes("EUC-KR"), "8859_1");
			}
			// 응답 헤더에 다운로드 될 파읿명을 매핑하기
			res.setHeader("Content-Disposition", "attachment;filename=" + downName);
			// 위에서 생성된 파일 문자열 객체를 가지고 파일생성에 필요한 객체의 파라미터 넘김
			fis = new FileInputStream(file);
			sos = res.getOutputStream();
			// 파일 내용을 담을 byte배열을 생성
			byte b[] = new byte[1024 * 10];
			int data = 0;
			while ((data = (fis.read(b, 0, b.length))) != -1) {
				// 파일에서 읽은 내용을 가지고 실제 파일에 쓰기 처리함
				// 여기서 처리된 값은 브라우저를 통해서 내보내진다
				sos.write(b, 0, data);
			}
			// 처리한 내용이 버퍼에 있는데 이것을 모두 처리요청하기
			// 내보내고 버퍼를 비운다 - 버퍼는 크기가 작음(휘발성)
			sos.flush();
		} catch (Exception e) {
			logger.info(e.toString());
		} finally {
			try {
				if (sos != null)
					sos.close();
				if (fis != null)
					fis.close();
			} catch (Exception e2) {
				// TODO: handle exception
			}
		}
		// byte[] fileArray = boardLogic.imageDownload(imageName);
		// logger.info(fileArray.length);
		return null;
	}// end of mImageGet
///////////////////////////////////////////////////
	/**
	 * 신고 - 글:0(Board에서 처리) / 댓글:1 / 마켓글:2 / 마켓리뷰:3
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("mReport")
	public String mReport(@RequestBody Map<String, Object> pMap) {
		logger.info("mReport 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.mReport(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
////////////////////////////////////////////////////
	/**
	 * 리뷰보기 - 정렬(높은 평점순, 낮은 평점순, 추천순, 최신순, 오래된 순)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("reviewList")
	public String reviewList(@RequestParam Map<String, Object> pMap) {
		logger.info("reviewList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> mList = null;
		mList = marketLogic.reviewList(pMap);
		logger.info(mList);
		Gson g = new Gson();
		temp = g.toJson(mList);		
		return temp;
	}
	/**
	 * 리뷰좋아요 판별
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("RLikedList")
	public String RLikedList(@RequestParam Map<String, Object> pMap) {
		logger.info("RLikedList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> mList = null;
		mList = marketLogic.RLikedList(pMap);
		logger.info(mList);
		Gson g = new Gson();
		temp = g.toJson(mList);		
		return temp;
	}
	
	/**
	 *리뷰 쓰기 - 별점, 한줄리뷰
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewInsert")
	public String reviewInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 리뷰 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewUpdate")
	public String reviewUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 리뷰 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewDelete")
	public String reviewDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 리뷰 좋아요
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewLike")
	public String reviewLike(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewLike 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewLike(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 리뷰좋아요 취소 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("reviewDislike")
	public String reviewDislike(@RequestBody Map<String, Object> pMap) {
		logger.info("reviewDislike 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.reviewDislike(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
//////////////////////////////////////////////////////////////
	/**
	 * 문의글 쓰기 - 구매자문의 step: 0 / 판매자 답글 step: 1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("qnaInsert")
	public String qnaInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		logger.info(pMap);
		int result = 0;
		result =marketLogic.qnaInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 문의 삭제- 구매자문의 step: 0 / 판매자 답글 step: 1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("qnaDelete")
	public String qnaDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("qnaDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = marketLogic.qnaDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * 문의글 보기
	 * 
	 * @param pMap 상품 정보
	 * @return 마켓상품 정보
	 */
	@GetMapping("qnaList")
	public String qnaList(@RequestParam Map<String, Object> pMap) {
		logger.info("qnaList 호출");
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = marketLogic.qnaList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
}//end of MarketController
