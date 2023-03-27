package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbMReviewVO {
	
	private int review_no;
	private int market_no;
	private String user_id;
	private int review_star;
	private String review_content;
	private String reivew_date;
	
}
