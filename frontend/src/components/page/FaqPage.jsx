import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import FaqNav from "../support/FaqNav";
import { FnHr } from "../../styles/SupportStyle";
import QuestionSection from "../support/QuestionSection";
import SupportSection from "../support/SupportSection";

const FaqPage = () => {
  return (
    <>
      <Header />
      <SupportSection />
      <FnHr/>
      <FaqNav />
      <QuestionSection />
      <Footer />
    </>
  );
};

export default FaqPage;
