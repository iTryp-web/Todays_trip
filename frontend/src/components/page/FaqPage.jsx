import React from "react";
import CsSection from "../support/CsSection";
import Header from "../include/Header";
import Footer from "../include/Footer";
import FaqNav from "../support/FaqNav";
import { FnHr } from "../../styles/SupportStyle";
import QuestionSection from "../support/QuestionSection";

const FaqPage = () => {
  return (
    <>
      <Header />
      <CsSection />
      <FnHr/>
      <FaqNav />
      <QuestionSection />
      <Footer />
    </>
  );
};

export default FaqPage;
