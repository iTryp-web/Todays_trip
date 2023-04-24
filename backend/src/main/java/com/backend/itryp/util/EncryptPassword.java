package com.backend.itryp.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class EncryptPassword {
	
	Logger log = LogManager.getLogger(EncryptPassword.class);
	
	/*	~쉽고 재미있는 사용법~
		1. 난수 생성
        	String salt = encryptPassword.getSalt();
        2. 난수(Salt)를 합쳐서 PW 암호화 처리
        	String encPassword = encryptPassword.getEncrypt([유저가 입력한 password], salt);
        3. encPassword를 DB에 넣어주기
        3-2. 로그인 확인시에도 비밀번호 변경 후 비교해주기
	*/

    /**
     * 난수 생성 메소드
     *
     * @return sb.toString() 난수 리턴
     */
    public String getSalt() {
    	log.info("getSalt");
        //Random, byte 객체 생성
        SecureRandom ran = new SecureRandom();
        byte[] salt = new byte[20];

        //난수 생성
        ran.nextBytes(salt);

        //byte To String (10진수의 문자열로 변경)
        StringBuffer sb = new StringBuffer();
        for (byte b : salt) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    /**
     * 패스워드 암호화 메소드
     *
     * @param password 사용자 입력 비밀번호
     * @param salt 난수
     * @return result 암호화된 비밀번호
     */
    public String getEncrypt(String password, String salt) {
    	log.info("getEncrypt");
        String result = "";
        try {
            //SHA256 알고리즘 객체 생성
            MessageDigest md = MessageDigest.getInstance("SHA-256");

            //password와 salt 합친 문자열에 SHA 256 적용
            md.update((password + salt).getBytes());
            byte[] pwsalt = md.digest();

            //byte To String (10진수의 문자열로 변경)
            StringBuffer sb = new StringBuffer();
            for (byte b : pwsalt) {
                sb.append(String.format("%02x", b));
            }
            result = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return result;
    }
}
