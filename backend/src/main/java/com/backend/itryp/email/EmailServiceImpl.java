package com.backend.itryp.email;

import java.util.Random;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
 
@Service
public class EmailServiceImpl implements EmailService{
 
    @Autowired
    JavaMailSender emailSender;
 
    public static final String ePw1 = createKey1();
    public static final String ePw2 = createKey2();
 
    private MimeMessage createMessage(String to)throws Exception{
        System.out.println("보내는 대상 : "+ to);
        System.out.println(to);
        System.out.println("인증 번호 : "+ePw1);
        MimeMessage  message = emailSender.createMimeMessage();
 
        message.addRecipients(RecipientType.TO, to);//보내는 대상
        message.setSubject("회원가입 인증 코드입니다.");//제목
 
        String msgg="";
        msgg+= "<div style='margin:20px;'>";
        msgg+= "<h1> 안녕하세요 오늘의 여행입니다. </h1>";
        msgg+= "<br>";
        msgg+= "<p>아래 코드를 복사해 입력해주세요<p>";
        msgg+= "<br>";
        msgg+= "<p>감사합니다.<p>";
        msgg+= "<br>";
        msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg+= "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        msgg+= "<div style='font-size:130%'>";
        msgg+= "CODE : <strong>";
        msgg+= ePw1+"</strong><div><br/> ";
        msgg+= "</div>";
        message.setText(msgg, "utf-8", "html");//내용
        message.setFrom(new InternetAddress("bamboogitmaster@gmail.com","오늘의 여행"));//보내는 사람
 
        return message;
    }
    private MimeMessage createResetMessage(String to)throws Exception{
    	System.out.println("보내는 대상 : "+ to);
    	System.out.println(to);
    	System.out.println("임시 비밀번호 : "+ePw2);
    	MimeMessage  message = emailSender.createMimeMessage();
    	
    	message.addRecipients(RecipientType.TO, to);//보내는 대상
    	message.setSubject("임시 비밀번호 입니다.");//제목
    	
    	String msgg="";
    	msgg+= "<div style='margin:20px;'>";
    	msgg+= "<h1> 안녕하세요 오늘의 여행입니다. </h1>";
    	msgg+= "<br>";
    	msgg+= "<p>초기화된 아래 비밀번호를 입력해주세요<p>";
    	msgg+= "<br>";
    	msgg+= "<p>비밀번호를 꼭 재설정 해주세요<p>";
    	msgg+= "<br>";
    	msgg+= "<p>감사합니다.<p>";
    	msgg+= "<br>";
    	msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
    	msgg+= "<h3 style='color:blue;'>임시 비밀번호 입니다.</h3>";
    	msgg+= "<div style='font-size:130%'>";
    	msgg+= "CODE : <strong>";
    	msgg+= ePw2+"</strong><div><br/> ";
    	msgg+= "</div>";
    	message.setText(msgg, "utf-8", "html");//내용
    	message.setFrom(new InternetAddress("bamboogitmaster@gmail.com","오늘의 여행"));//보내는 사람
    	
    	return message;
    }
 
    public static String createKey1() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();
 
        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤
 
            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }
        return key.toString();
    }
    
    public static String createKey2() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();
 
        for (int i = 0; i < 10; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤
 
            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }
        return key.toString();
    }
    @Override
    public String sendSimpleMessage1(String json)throws Exception {
        // TODO Auto-generated method stub
    	ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(json);
        String to = node.get("email").asText();
        MimeMessage message = createMessage(to);
        try{//예외처리
            emailSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return ePw1;
    }
    @Override
    public String sendSimpleMessage2(String json)throws Exception {
    	// TODO Auto-generated method stub
    	ObjectMapper mapper = new ObjectMapper();
    	JsonNode node = mapper.readTree(json);
    	String to = node.get("email").asText();
    	MimeMessage message = createResetMessage(to);
    	try{//예외처리
    		emailSender.send(message);
    	}catch(MailException es){
    		es.printStackTrace();
    		throw new IllegalArgumentException();
    	}
    	return ePw2;
    }
}