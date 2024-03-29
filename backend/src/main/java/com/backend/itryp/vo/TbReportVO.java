package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbReportVO {

	private int report_no;
	private String user_id;
	private int report_type;
	private int report_type_step;
	private String report_user;
	private String report_reason;
	private String report_date;
	private int report_sort;
	private int report_result;
	
}
