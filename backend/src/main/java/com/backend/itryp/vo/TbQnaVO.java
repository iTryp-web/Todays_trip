package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbQnaVO {
	
	private int qna_no;
	private int market_no;
	private String user_id;
	private String qna_title;
	private String qna_content;
	private String qna_date;
	private int qna_sort;

}
