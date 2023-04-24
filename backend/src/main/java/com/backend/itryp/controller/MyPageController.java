package com.backend.itryp.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.itryp.logic.MyPageLogic;

@RestController
@RequestMapping("/mypage/*")
public class MyPageController {
	
	Logger log = LogManager.getLogger(MyPageController.class);
	
	@Autowired
	MyPageLogic mpLogic = null;
	
	
}
