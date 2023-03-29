package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberDao {
	Logger logger = LogManager.getLogger(MemberDao.class);
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;
	
	public List<Map<String,Object>> memberList(Map<String,Object> pMap){
		logger.info("memberList 호출");
		List<Map<String,Object>> mList = sqlSessionTemplate.selectList("memberList", pMap);
		return mList;
	}

	public int memberInsert(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.update("memberInsert",pMap);
		return result;
	}

	public int memberUpdate(Map<String, Object> pMap) {
		logger.info("memberUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("memberUpdate",pMap);
		return result;
	}

	public int memberDelete(Map<String, Object> pMap) {
		logger.info("memberDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.update("memberDelete",pMap);
		return result;
	}
}
