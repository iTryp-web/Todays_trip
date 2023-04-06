package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MemberDao;

@Service
public class MemberLogic {
	Logger logger = LogManager.getLogger(MemberLogic.class);
	
	@Autowired
	private MemberDao memberDao = null;
	
	//회원정보 조회-상세보기 페이지
	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		
		logger.info("memberList 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList = memberDao.memberList(pMap);
		return mList;
	}
	
	//회원가입
	public int memberInsert(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		logger.info(pMap.toString());
		int result = 0;
		result = memberDao.memberInsert(pMap);
		return result;
	}
	//회원정보 수정
	public int memberUpdate(Map<String, Object> pMap) {
		logger.info("memberUpdate 호출");
		logger.info(pMap.toString());
		int result = 0;
		int pw_check = 0; //회원정보 수정시 비밀번호 입력해야 들어갈수 있는
		
		result = memberDao.memberUpdate(pMap);
		return result;
	}
	

}
