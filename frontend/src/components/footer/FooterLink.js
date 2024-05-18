import React from "react";
import "./FooterLinks.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logoimg from "../../assets/hi5_logo.png";
const FooterLink = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebookF className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
            <FaWhatsapp className="i" />
          </div>
          <h2>Let's talk ?</h2>
          <a href="#home" className="btn btn-dark">
            Make an enquiry!
          </a>
        </div>
      </section>

      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src={logoimg} alt="logo" />
          </div>
          <div className="footer-menu">
            <p className="link-heading">Feature</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Links Shortening</a>
              </li>
              <li>
                <a href="#home">Branded links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Resources</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Links Shortening</a>
              </li>
              <li>
                <a href="#home">Branded links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Company</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Links Shortening</a>
              </li>
              <li>
                <a href="#home">Branded links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Partner</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Links Shortening</a>
              </li>
              <li>
                <a href="#home">Branded links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLink;
