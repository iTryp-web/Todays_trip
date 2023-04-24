package com.backend.itryp.dao;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyPageDao {
	
	Logger log = LogManager.getLogger(MyPageDao.class);
	
	@Autowired
	private SqlSessionTemplate sst = null;
}
