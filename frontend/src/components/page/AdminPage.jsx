import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AdminLayout from "../admin/AdminLayout";
import { Body, Main } from "../../styles/FooterStyle";

const AdminPage = () => {
  const navigate = useNavigate();

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  
  useEffect(() => {
    if(userRole != 2) {
      navigate('/')
    }
  }, [userId, userRole])

  return (
    <>
      <Header />
      <AdminLayout />
      <Footer />
    </>
  );
};

export default AdminPage;
