package com.backend.itryp.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("/test/*")
public class RestTestController {
	Logger logger = LoggerFactory.getLogger(RestTestController.class);

	@GetMapping("testList")
	public String testList(Model model) {
		logger.info("testList 호출");
		String temp = null;
		List<Map<String, Object>> tList = new ArrayList<>();
		Map<String, Object> pMap = new HashMap<>();
		pMap.put("mem_id", "test");
		pMap.put("mem_pw", "123");
		pMap.put("mem_name","테스트");
		tList.add(pMap);
		Gson g = new Gson();
		temp = g.toJson(tList);
		return temp;
	}
}