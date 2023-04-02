package com.backend.itryp.dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.controller.OrderController;

@Service
public class OrderDao {
	
	Logger log = LogManager.getLogger(OrderController.class);
	
	@Autowired
	private SqlSessionTemplate sst = null;

	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> getItemShopPage(Map<String, Object> pmap) {
		log.info("getItemShopPage 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("getItemList", pmap);
		return list;
	}

	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> getCartPage(Map<String, Object> pmap) {
		log.info("getCartPage 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("getCartList", pmap);
		return list;
	}
	
	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> insertCart(Map<String, Object> pmap) {
		log.info("insertCart 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("insertCart", pmap);
		return list;
	}

	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> UpdateCart(Map<String, Object> pmap) {
		log.info("UpdateCart 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("UpdateCart", pmap);
		return list;
	}
	
	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> deleteCart(Map<String, Object> pmap) {
		log.info("deleteCart 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("deleteCart", pmap);
		return list;
	}
	
	
	/**
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> getOrderPage(Map<String, Object> pmap) {
		log.info("getOrderPage 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("getOrderInfo", pmap);
		return list;
	}


	/**
	 * orderUpdate
	 * 
	 * @param pmap
	 * @return
	 */
	public List<Map<String, Object>> orderUpdate(Map<String, Object> pmap) {
		log.info("orderUpdate 호출");
		List<Map<String,Object>> list = null;
		list = sst.selectList("orderUpdate", pmap);
		return list;
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

}
