package com.backend.itryp.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/service/*")
public class EmailController {
	 @Autowired
	 EmailService emailService;
	 
	 private static final Logger logger = LoggerFactory.getLogger(EmailController.class);
	 
		@ResponseBody
		@PostMapping("/mail")
		public void emailConfirm(@RequestBody String email)throws Exception{
			logger.info("post emailConfirm");
			System.out.println("전달 받은 이메일 : "+email);
			emailService.sendSimpleMessage(email);	
		}
		
		@ResponseBody
		@PostMapping("/verifyCode")
		public int verifyCode(@RequestBody VerifyCodeDto req) {
			logger.info("Post verifyCode");
			
			int result = 0;
			String code = req.getCode();
			System.out.println("code : "+code);
			System.out.println("code match : "+ EmailServiceImpl.ePw.equals(code));
			if(EmailServiceImpl.ePw.equals(code)) {
				result =1;
			}
			
			return result;
		}
}