package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MemberDao;

@Service
public class MemberLogic {
	Logger logger = LogManager.getLogger(MemberLogic.class);
	
	@Autowired
	private MemberDao memberDao = null;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	//회원정보 조회-상세보기 페이지(회원정보 조회시 전부 조회), 로그인(로그인시 닉네임만 조회)
	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		logger.info("memberList 호출");
	    String password =(String)pMap.get("user_pw");
	    Map<String,Object> result = new HashMap<String,Object>();
	    
	    List<Map<String,Object>> mList = memberDao.memberList(pMap);
	    logger.info(mList);
	    
	    try {
	    	if(mList.size()>0) {
		    	logger.info("pw비교");
		    	Map<String,Object> rMap = mList.get(0);
		    	String user_pw = (String)rMap.get("USER_PW");
		    	logger.info(password);
		    	logger.info(user_pw);
		    	boolean isTrue = passwordEncoder.matches(password, user_pw);
		    	if(isTrue) {
		    		// 로그인 성공
		    		return mList;
		    	} else {
		    		// 비밀번호 틀림
		    		mList.clear();
					result.put("result",1);
					mList.add(result);
					return mList;
		    	}	
		    } else {
		    	// 아이디 일치하는게 없을 경우
		    	mList.clear();
				result.put("result",0);
				mList.add(result);
				return mList;
		    }
		} catch (NullPointerException e) {
			mList.clear();
			result.put("result",0);
			mList.add(result);
			return mList;
		}
	}
	//아이디, 닉네임, 이메일 중복체크 + 이메일(아이디) 조회
	public List<Map<String, Object>> checkInfo(Map<String, Object> pMap) {
		logger.info("checkInfo 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList = memberDao.checkInfo(pMap);
		return mList;
	}
	//세션 정보 
	public List<Map<String, Object>> sessionList(Map<String, Object> pMap) {
		logger.info("sessionList 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList = memberDao.sessionList(pMap);
		return mList;
	}
	//이메일 조회
	public List<Map<String, Object>> findUser(Map<String, Object> pMap) {
		logger.info("findeUser 호출");
		List<Map<String,Object>> mList = new ArrayList<>();
		mList = memberDao.findUser(pMap);
		return mList;
	}
	//추천인 조회
		public List<Map<String, Object>> referrer(Map<String, Object> pMap) {
			logger.info("referrer 호출");
			List<Map<String,Object>> mList = new ArrayList<>();
			mList = memberDao.referrer(pMap);
			return mList;
		}
	//회원가입
	public int memberInsert(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		logger.info(pMap.toString());
		
		String password =(String)pMap.get("user_pw");
		String encodedPassword = passwordEncoder.encode(password);
		pMap.put("user_pw", encodedPassword);
		
		int result = 0;
		result = memberDao.memberInsert(pMap);
		return result;
	}
	//회원정보 수정
	public int memberUpdate(Map<String, Object> pMap) {
		logger.info("memberUpdate 호출");
		logger.info(pMap.toString());
		
		String password =(String)pMap.get("user_pw");
		String encodedPassword = passwordEncoder.encode(password);
		pMap.put("user_pw", encodedPassword);
		
		int result = 0;	
		result = memberDao.memberUpdate(pMap);
		return result;
	}
	//임시 비밀번호 발급
	public int resetPassWord(Map<String, Object> pMap) {
		logger.info("resetPassWord 호출");
		logger.info(pMap.toString());
		
		String password =(String)pMap.get("user_pw");
		String encodedPassword = passwordEncoder.encode(password);
		pMap.put("user_pw", encodedPassword);
		
		int result = 0;	
		result = memberDao.resetPassWord(pMap);
		return result;
	}


	public int memberDelete(Map<String, Object> pMap) {
		logger.info("memberDelete 호출");
		logger.info(pMap.toString());
		int result = 0;
		result = memberDao.memberDelete(pMap);
		return result;
	}
	
	
	

}
