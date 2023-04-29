package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbUserVO {
	
	private String user_id;
	private String user_pw;
	private String user_nickname;
	private String user_email;
	private String user_name;
	private String user_phone;
	private String user_zipcode;
	private String user_address;
	private String user_address_detail;
	private String user_level;
	private int fail_cnt;
	private String salt;
	private String provider;
	private int role;
	private int status;

}
