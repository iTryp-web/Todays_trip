package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.MainDao;

@Service
public class MainLogic {
	Logger logger = LogManager.getLogger(MainLogic.class);
	
	@Autowired
	private MainDao mainDao = null;

	/**
	 * 메인페이지 마켓인기, 마켓신규, 커뮤인기, 커뮤신규글 출력
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> mainList(Map<String, Object> pMap) {
		logger.info("mainList 호출");
		List<Map<String, Object>> mList = new ArrayList<>();
		// 마켓 인기글(판매량높은순)
		List<Map<String, Object>> mainMarketHot =  mainDao.mainMarketHot(pMap);
		if(mainMarketHot != null && mainMarketHot.size() > 0) {
			mList.addAll(mainMarketHot);
		}
		// 마켓 신규글
		List<Map<String, Object>> mainMarketNew =  mainDao.mainMarketNew(pMap);
		if(mainMarketNew != null && mainMarketNew.size() > 0) {
			mList.addAll(mainMarketNew);
		}
		// 커뮤 인기글(좋아요 5개이상 혹은 조회수 30이상 + 일주일 안의 작성글)
		List<Map<String, Object>> mainBoardHot =  mainDao.mainBoardHot(pMap);
		if(mainBoardHot != null && mainBoardHot.size() > 0) {
			mList.addAll(mainBoardHot);
		}
		// 커뮤 신규글
		List<Map<String, Object>> mainBoardNew =  mainDao.mainBoardNew(pMap);
		if(mainBoardNew != null && mainBoardNew.size() > 0) {
			mList.addAll(mainBoardNew);
		}
		return mList;
	}

}
