package com.backend.itryp.logic;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.itryp.dao.BoardDao;
import com.backend.itryp.dao.MarketDao;

public class MarketLogic {
	Logger logger = LogManager.getLogger(MarketLogic.class);
	
	@Autowired
	private MarketDao marketDao = null;

	public static List<Map<String, Object>> MarketList(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
