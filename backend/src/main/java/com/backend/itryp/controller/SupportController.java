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

import com.backend.itryp.logic.SupportLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/support/*")
public class SupportController {
	Logger logger = LogManager.getLogger(BoardController.class);
	// 현 시점 해야할 것
	// 1. crud 단계에서 삭제로직 구현
	// 1-a. crud 단계에서 notice* 관련 부분들을 전부 TB_QNA에서 사용하는 로직으로 변경해주기
	// 2. 프론트 완성(디자인 신경쓰지않고 껍데기라도)
	// 3. 연결
	@Autowired
	private SupportLogic supportLogic = null;

	/**
	 * 공지사항 글 조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("noticeList")
	public String noticeList(@RequestParam Map<String, Object> pMap) {
		logger.info("noticeList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> sList = null;
		sList = supportLogic.noticeList(pMap);
		logger.info(sList);
		Gson g = new Gson();
		temp = g.toJson(sList);
		return temp;
	}

	/**
	 * 공지사항 글 작성
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("noticeInsert")
	public String noticeInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("noticeInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = supportLogic.noticeInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

	/**
	 * 공지사항 글 삭제 - 추후에 FAQ와 합쳐줄 것.
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("noticeDelete")
	public String noticeDelete(@RequestParam Map<String, Object> pMap) {
		logger.info("noticeDelete 호출");
		logger.info(pMap);
		if (pMap.get("qna_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int nf_no = Integer.parseInt(pMap.get("nf_no").toString());
			pMap.put("nf_no", nf_no);
		}
		int result = 0;
		result = supportLogic.noticeDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	/**
	 * FAQ 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("faqDelete")
	public String faqDelete(@RequestParam Map<String, Object> pMap) {
		logger.info("faqDelete 호출");
		logger.info(pMap);
		if (pMap.get("qna_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int nf_no = Integer.parseInt(pMap.get("nf_no").toString());
			pMap.put("nf_no", nf_no);
		}
		int result = 0;
		result = supportLogic.faqDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

	/**
	 * 1:1문의 글 조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("inquiryList")
	public String inquiryList(@RequestParam Map<String, Object> pMap) {
		logger.info("inquiryList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> sList = null;
		sList = supportLogic.inquiryList(pMap);
		logger.info(sList);
		Gson g = new Gson();
		temp = g.toJson(sList);
		return temp;
	}

	/**
	 * 1:1문의 글 작성
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("inquiryInsert")
	public String inquiryInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("inquiryInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = supportLogic.inquiryInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

	/**
	 * 1대1문의 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("inquiryDetail")
	public String inquiryDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("inquiryDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = supportLogic.inquiryDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}

	/**
	 * 1대1문의 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("inquiryDelete")
	public String inquiryDelete(@RequestParam Map<String, Object> pMap) {
		logger.info("inquiryDelete 호출");
		logger.info(pMap);
		if (pMap.get("qna_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int qna_no = Integer.parseInt(pMap.get("qna_no").toString());
			pMap.put("qna_no", qna_no);
		}
		int result = 0;
		result = supportLogic.inquiryDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

	/**
	 * 판매자 등록 글쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("sellerRegInsert")
	public String sellerRegInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("sellerRegInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = supportLogic.sellerRegInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

	/**
	 * 판매자 등록 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("sellerRegDelete")
	public String sellerRegDelete(@RequestParam Map<String, Object> pMap) {
		logger.info("sellerRegDelete 호출");
		logger.info(pMap);
		if (pMap.get("qna_no") != null) {
			// NumberFormatException 방어코드(값에 null이 들어가지 않도록!)
			int qna_no = Integer.parseInt(pMap.get("qna_no").toString());
			pMap.put("qna_no", qna_no);
		}
		int result = 0;
		result = supportLogic.sellerRegDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}

}
