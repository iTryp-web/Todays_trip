import React from "react";
import CsSection from "../support/CsSection";
import Header from "../include/Header";
import Footer from "../include/Footer";
import FaqSection from "../support/FaqSection";
import FaqNav from "../support/FaqNav";

const FaqPage = () => {
  return (
    <>
      <Header />
      <CsSection />
      <FaqNav />
      <FaqSection />
      <Footer />
    </>
  );
};

export default FaqPage;
