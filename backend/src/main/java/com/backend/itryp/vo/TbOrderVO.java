package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbOrderVO {

	private int order_no;
	private int market_no;
	private int market_count;
	private String user_id;
	private int order_total;
	private int order_discount;
	private String coupon_no;
	private int order_payment;
	private String order_date;
	
}
