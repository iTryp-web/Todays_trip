package com.backend.itryp.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.TestLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/test/*")
public class RestTestController {
	Logger logger = LoggerFactory.getLogger(RestTestController.class);

	@Autowired
	TestLogic tl = null;
	
	@GetMapping("testList")
	public String testList(Model model) {
		logger.info("testList 호출");
		String temp = null;
		temp = tl.test();
		return temp;
	}
}