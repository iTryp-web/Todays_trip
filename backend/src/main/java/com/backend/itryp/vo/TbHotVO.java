package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbHotVO {
	
	private int item_no;
	private String item_name;
	private int item_price;
	private String item_date;
	private String item_type;

}
