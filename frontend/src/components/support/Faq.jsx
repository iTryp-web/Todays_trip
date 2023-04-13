import React, { useState, useEffect } from "react";
import axios from "axios";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get("/api/faqs").then((res) => {
      setFaqs(res.data);
    });
  }, []);

  return (
    <div className="faq">
      <section className="faq-payment">
        <h2>결제</h2>
        <ul>
          {faqs
            .filter((faq) => faq.nf_category === "payment")
            .map((faq) => (
              <li key={faq.nf_no}>
                <h3>{faq.nf_title}</h3>
                <p>{faq.nf_content}</p>
              </li>
            ))}
        </ul>
      </section>

      <section className="faq-refund">
        <h2>환불</h2>
        <ul>
          {faqs
            .filter((faq) => faq.nf_category === "refund")
            .map((faq) => (
              <li key={faq.nf_no}>
                <h3>{faq.nf_title}</h3>
                <p>{faq.nf_content}</p>
              </li>
            ))}
        </ul>
      </section>

      <section className="faq-seller-registration">
        <h2>판매자 등록</h2>
        <ul>
          {faqs
            .filter((faq) => faq.nf_category === "seller-registration")
            .map((faq) => (
              <li key={faq.nf_no}>
                <h3>{faq.nf_title}</h3>
                <p>{faq.nf_content}</p>
              </li>
            ))}
        </ul>
      </section>

      <section className="faq-service">
        <h2>서비스</h2>
        <ul>
          {faqs
            .filter((faq) => faq.nf_category === "service")
            .map((faq) => (
              <li key={faq.nf_no}>
                <h3>{faq.nf_title}</h3>
                <p>{faq.nf_content}</p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Faq;