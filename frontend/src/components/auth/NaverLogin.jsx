import React from 'react'

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + ${process.env.REACT_APP_NAVER_CLIENT_ID} + '&redirect_uri=' + ${process.env.REACT_APP_NAVER_REDIRECT_URI} + '&state=' + Math.random().toString(36).substr(3, 14)`

const NaverLogin = () => {
  return (
    <>
      네이버 로그인
    </>
  )
}

export default NaverLogin
