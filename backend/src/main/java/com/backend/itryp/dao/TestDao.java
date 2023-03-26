package com.backend.itryp.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestDao {
	@Autowired
	private SqlSessionTemplate sst = null;
	
	public String testMethod(){
		String result = null;
		result = sst.selectOne("getToday");
		return result;
	}
}
