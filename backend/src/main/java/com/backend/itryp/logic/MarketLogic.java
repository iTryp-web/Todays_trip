package com.backend.itryp.logic;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.BoardDao;
import com.backend.itryp.dao.MarketDao;

@Service
public class MarketLogic {
	Logger logger = LogManager.getLogger(MarketLogic.class);
	
	@Autowired
	private MarketDao marketDao = null;

	public static List<Map<String, Object>> marketList(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Map<String, Object>> marketDetail(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}

	public int marketUpdate(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int marketDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewInsert(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewUpdate(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int reviewLike(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return 0;
	}
}
