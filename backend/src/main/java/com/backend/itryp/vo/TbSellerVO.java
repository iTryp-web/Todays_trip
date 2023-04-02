package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbSellerVO {
	
	private String user_id;
	private String seller_auth;
	private String seller_category;
	
}
