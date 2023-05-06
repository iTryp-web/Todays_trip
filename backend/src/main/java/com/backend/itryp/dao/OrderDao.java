package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.controller.OrderController;
import com.backend.itryp.vo.TbUserVO;

@Service
public class OrderDao {
	
	Logger log = LogManager.getLogger(OrderController.class);
	
	@Autowired
	private SqlSessionTemplate sst = null;
	
	/**
	 * getOrderPage
	 * 
	 * @param pmap
	 * @return list
	 */
	public List<Map<String, Object>> getOrderPage(Map<String, Object> pmap) {
		log.info("getOrderPage 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("getOrderPage", pmap);
		return list;
	}

	/**
	 * orderInsert
	 * 
	 * @param pmap orderInfo
	 * @return result
	 */
	public int orderInsert(Map<String, Object> pmap) {
		log.info("orderInsert 호출");
		int result = 0;
		result = sst.update("InsertOrder", pmap);
		return result;
	}

	/**
	 * orderDetailInsert
	 * 
	 * @param pmap orderInfo
	 * @return result
	 */
	public int orderDetailInsert(Map<String, Object> pmap) {
		log.info("orderDetailInsert 호출");
		int result = 0;
		result = sst.update("InsertOrderDetail", pmap);
		return result;
	}

	/**
	 * getOrderNo
	 * 
	 * @return orderNo
	 */
	public int getOrderNo(Map<String, Object> pmap) {
		log.info("getOrderNo 호출");
		int orderNo = 0;
		orderNo = sst.selectOne("getOrderNo", pmap);
		return orderNo;
	}

	/**
	 * 유저 정보 조회하기
	 * 
	 * @param pmap userId 정보
	 * @return TbUserVO 유저 정보
	 */
	public TbUserVO getUserInfo(Map<String, Object> pmap) {
		log.info("getUserInfo 호출");
		TbUserVO user = new TbUserVO();
		user = (TbUserVO) sst.selectOne("getUserInfo", pmap);
		return user;
	}

	/**
	 * paymentUpdate
	 * 결제 정보 테이블에 삽입
	 * 
	 * @param pmap
	 * @return
	 */
	public int paymentUpdate(Map<String, Object> pmap) {
		log.info("paymentUpdate 호출");
		log.info(pmap);
		int result = 0;
		result = sst.update("InsertPay", pmap);
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
		List<Map<String,Object>> list = null;
		list = sst.selectList("cancelOrder", pmap);
		return list;
	}

	/**
	 * failPayment
	 * 
	 * @param pmap 
	 * @return result 결과값
	 */
	public int failPayment(Map<String, Object> pmap) {
		log.info("failPayment 호출");
		int result = 0;
		result = sst.update("failPayment", pmap);
		return result;
	}

	/**
	 * couponUpdate
	 * 
	 * @param pmap 
	 * @return result 결과값
	 */
	public int couponUpdate(Map<String, Object> pmap) {
		log.info("couponUpdate 호출");
		int result = 0;
		result = sst.update("updateCouponInfo", pmap);
		return result;
	}

}
