package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbBCommentVO {
	
	private int board_no;
	private String user_id;
	private int comment_no;
	private int comment_step;
	private String comment_content;
	private String comment_date;

}
