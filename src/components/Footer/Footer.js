import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>

      <div className="second">
        <p className="text">Conditions of Use</p>
        <p className="text">Privacy & Policy</p>
        <p className="text">Press Room</p>
      </div>

      <p className="copyright">© 2021 MovieBox by Adriana Eka Prayudha</p>
    </section>
  );
};

export default Footer;
