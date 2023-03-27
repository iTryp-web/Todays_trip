package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbMarketVO {
	
	private int market_no;
	private String user_id;
	private String market_category;
	private String market_title;
	private String market_content;
	private int market_price;
	private String market_date;
	
}
