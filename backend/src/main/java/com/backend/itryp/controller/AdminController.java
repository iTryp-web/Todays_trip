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

import com.backend.itryp.logic.AdminLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/admin/*")
public class AdminController {
	Logger logger = LogManager.getLogger(AdminController.class);

	@Autowired
	private AdminLogic adminLogic = null;

	/**
	 * 오버뷰(신고글'회원, 차단글'회원, 탈퇴회원) - 처리안된것 있으면 마크표시해주는 용도
	 * @param pMap
	 * @return
	 */
	@GetMapping("overview")
	public String overview(@RequestParam Map<String, Object> pMap) {
		logger.info("overview 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.overview(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 신고 목록 조회(글0, 댓글1)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("reportList")
	public String reportList(@RequestParam Map<String, Object> pMap) {
		logger.info("reportList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.reportList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 회원, 글, 댓글 상태 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("statusUpdate")
	public String statusUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("statusUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.statusUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 차단 회원, 글, 댓글 목록 조회
	 * @param pMap
	 * @return
	 */
	@GetMapping("banList")
	public String banList(@RequestParam Map<String, Object> pMap) {
		logger.info("banList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.banList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 차단 글, 댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("banDelete")
	public String banDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("banDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.banDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 탈퇴(신청) 회원 목록 조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("resignList")
	public String resignList(@RequestParam Map<String, Object> pMap) {
		logger.info("resignList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.resignList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 탈퇴(신청) 회원 상태 수정 탈퇴1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("resignUpdate")
	public String resignUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("resignUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.resignUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 탈퇴 회원 삭제 
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("resignDelete")
	public String resignDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("resignDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.resignDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
}