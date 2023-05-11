package com.backend.itryp.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.controller.OrderController;
import com.backend.itryp.dao.OrderDao;
import com.backend.itryp.vo.TbUserVO;

@Service
public class OrderLogic {
	
	Logger log = LogManager.getLogger(OrderController.class);
	
	@Autowired
	OrderDao odao = null;
	
	/**
	 * getOrderPage
	 * 
	 * @param pmap 유저 아이디
	 * @return list 쿠폰 정보, 유저 정보
	 */
	public Map<String, Object> getOrderPage(Map<String, Object> pmap) {
		log.info("getOrderPage 호출");
		
		Map<String,Object> rmap = new HashMap<>();
		TbUserVO user = odao.getUserInfo(pmap);
		rmap.put("userInfo", user);
		
		List<Map<String, Object>> list = new ArrayList<>();
		list = odao.getOrderPage(pmap);
		rmap.put("couponList", list);
		
		return rmap;
	}


	/**
	 * orderUpdate
	 * 
	 * @param pmap OrderInfo, OrderDetailInfo 주문자 정보, 주문 상품 정보
	 * @return orderNo 주문 번호
	 */
	public Map<String, Object> orderUpdate(Map<String, Object> pmap) {
		log.info("orderUpdate 호출");
		
		Map<String,Object> rmap = new HashMap<>();
		int result = 0;
		ArrayList<Map> detailList;
		
		log.info((Map)pmap.get("orderInfo"));
		
		//주문 정보 테이블에 데이터 삽입
		result = odao.orderInsert((Map)pmap.get("orderInfo"));
		if(result == 0) return rmap;
		
		//주문 번호 가져오기
		int orderNo = odao.getOrderNo((Map)pmap.get("orderInfo"));
		
		//주문 상세 테이블에 데이터 삽입
		detailList = (ArrayList) pmap.get("orderDetailInfo");
		
		for(int i = 0; i < detailList.size(); i++) {
			if(detailList.get(i).size() > 0) {
				Map<String, Object> dmap = (Map)detailList.get(i);
				dmap.put("order_no", orderNo);
				result = odao.orderDetailInsert(dmap);				
			}
		}
		rmap.put("order_no", orderNo);
		return rmap;
	}
	
	
	/**
	 * paymentUpdate
	 * 
	 * @param pmap 결제 정보
	 * @return result 결과값
	 */
	public int paymentUpdate(Map<String, Object> pmap) {
		log.info("paymentUpdate 호출");
		int result = 0;
		if(pmap.get("coupon_no").toString().length() > 2)
			result = odao.couponUpdate(pmap);
		result = odao.paymentUpdate(pmap);
		return result;
	}
	
	
	/**
	 * cancelOrder
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> cancelOrder(Map<String, Object> pmap) {
		log.info("cancelOrder 호출");
		List<Map<String,Object>> list = new ArrayList<>();
		list = odao.cancelOrder(pmap);
		return list;
	}


	/**
	 * failPayment
	 * 
	 * @param pmap
	 * @return
	 */
	public int failPayment(Map<String, Object> pmap) {
		log.info("failPayment 호출");
		int result = 0;
		result = odao.failPayment(pmap);
		return result;
	}


}
