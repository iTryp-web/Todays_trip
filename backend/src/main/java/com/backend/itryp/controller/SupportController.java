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
	
	@Autowired
	private SupportLogic supportLogic = null;
	
	/**
	 * 공지사항 글 조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("announceList")
	public String announceList(@RequestParam Map<String, Object> pMap) {
		logger.info("announceList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> sList = null;
		sList = supportLogic.announceList(pMap);
		logger.info(sList);
		Gson g = new Gson();
		temp = g.toJson(sList);		
		return temp;
	}
	
	/**
	 * 공지사항 글 쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("announceInsert")
	public String boardInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("announceInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = supportLogic.announceInsert(pMap);
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
	 * 판매자 탈퇴 글쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("sellerDelInsert")
	public String sellerDelInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("sellerDelInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = supportLogic.sellerDelInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
}


