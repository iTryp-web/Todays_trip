import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AdminLayout from "../admin/AdminLayout";
import { AdminH3, AdminHeader } from "../../styles/AdminStyle";

const AdminPage = () => {
  // 단위테스트용!!
  window.sessionStorage.setItem("user_id", "admin");
  window.sessionStorage.setItem("user_nickname", "관리자");
  window.sessionStorage.setItem("user_role", '2');
  const navigate = useNavigate();

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  
  useEffect(() => {
    if(userRole != 2) {
      alert('접근 권한이 없습니다.')
      navigate('/')
    }
  }, [userId])

  return (
    <>
      <Header />
      <AdminLayout />
      <Footer />
    </>
  );
};

export default AdminPage;
