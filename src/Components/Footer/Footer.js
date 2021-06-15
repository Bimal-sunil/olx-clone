import React from "react";
import SubFooter from "../../Short Components/Sub Footer/SubFooter";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="popular-locations">
          <h1 className="footer_title">POPULAR LOCATIONS</h1>
          <p className="footer__items">Kolkata</p>
          <p className="footer__items">Mumbai</p>
          <p className="footer__items">Chennai</p>
          <p className="footer__items">Pune</p>
        </div>
        <div className="trending-locations">
          <h1 className="footer_title">TRENDING LOCATIONS</h1>
          <p className="footer__items">Bhubaneshwar</p>
          <p className="footer__items">Hyderabad</p>
          <p className="footer__items">Chandigarh</p>
          <p className="footer__items">Nashik</p>
        </div>
        <div className="about-us">
          <h1 className="footer_title">TRENDING LOCATIONS</h1>
          <p className="footer__items">About OLX Group</p>
          <p className="footer__items">Careers</p>
          <p className="footer__items">Contact Us</p>
          <p className="footer__items">OLXPeople</p>
          <p className="footer__items">Waah Jobs</p>
        </div>
        <div className="about-olx">
          <h1 className="footer_title">OLX</h1>
          <p className="footer__items">Help</p>
          <p className="footer__items">Sitemap</p>
          <p className="footer__items">Legal & Privacy information</p>
        </div>
        <div className="social">
          <h1 className="footer_title">FOLLOW US</h1>
          <div className="social_icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
}

export default Footer;

// Finished
