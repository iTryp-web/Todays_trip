package com.backend.itryp.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.itryp.dao.OrderDao;

@Service
public class OrderLogic {
	
	@Autowired
	OrderDao odao = null;

}
