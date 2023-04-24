package com.backend.itryp.logic;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MyPageDao;

@Service
public class MyPageLogic {
	
	Logger log = LogManager.getLogger(MyPageLogic.class);
	
	@Autowired
	MyPageDao mpDao = null;

}
