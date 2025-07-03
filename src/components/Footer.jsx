import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3>DLearning Center</h3>
        <p>Empowering you to master technology skills faster.</p>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="https://meetkrishna.netlify.app/contact"target="_blank">Contact</a>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} DLearning Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
