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
	 * 오버뷰(새로운 문의, 신고, 신청 표시) - 처리안된것 있으면 마크표시해주는 용도
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
	 * 차단 회원, 글, 댓글 삭제==
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
	 * 탈퇴 회원 삭제 ==
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
	
	/**
	 * 신고당한 회원 글, 댓글 출력
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("userDetail")
	public String userDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("userDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.userDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 주문 상태 수정 예약0, 취소1, 판매2
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("orderUpdate")
	public String orderUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("orderUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.orderUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	
	/**
	 * 주문 상세보기
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("orderDetail")
	public String orderDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("orderDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = adminLogic.orderDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);
		return temp;
	}
	
	/**
	 * 주문 예약자 정보 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("orderInfoUpdate")
	public String orderInfoUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("orderInfoUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = adminLogic.orderInfoUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
}