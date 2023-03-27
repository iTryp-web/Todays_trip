package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbMAbleVO {
	
	private int market_no;
	private int market_a_cnt;
	private String market_a_date;
	
}
