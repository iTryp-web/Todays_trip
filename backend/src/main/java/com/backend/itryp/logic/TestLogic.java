package com.backend.itryp.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.TestDao;

@Service
public class TestLogic {
	
	@Autowired
	TestDao td = null;
	
	public String test() {
		String temp = "";
		temp = td.testMethod();
		return temp;
	}

}
