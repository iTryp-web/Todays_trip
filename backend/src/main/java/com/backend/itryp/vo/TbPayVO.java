package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbPayVO {

	private int pay_no;
	private int pay_method;
	private int order_no;
	private String user_id;
	private String pay_date;
	private int pay_total;
	private int pay_check;
	
}
