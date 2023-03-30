package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbCartVO {

	private int cart_no;
	private String user_id;
	private int market_no;
	private int market_count;
	private String cart_date;
	
}
