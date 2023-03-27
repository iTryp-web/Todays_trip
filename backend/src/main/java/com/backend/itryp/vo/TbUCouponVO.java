package com.backend.itryp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbUCouponVO {
	
	private String coupon_no;
	private String user_id;
	private int coupon_rate;
	private int coupon_min;
	private int coupon_max;

}
