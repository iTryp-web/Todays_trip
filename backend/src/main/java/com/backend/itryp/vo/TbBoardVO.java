package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbBoardVO {
	
	private int board_no;
	private String user_id;
	private String board_category;
	private String board_title;
	private String board_content;
	private String board_date;
	private int board_hit;

}
