// Footer.js
import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <p>Get in touch</p>
        {/* <p>Information</p> */}
        <div className="foofrst">
          <h5 className="foofrst1">Help & Support</h5>
          <p>Call: 9868381361</p>
          <p>Email: watchcart@gmail.com</p>
        </div>
        {/* <div className="foofrst">
          <h5 className="foofrst1">Information</h5>
          <p>Privacy Policy</p>
          
          <p>Refung & Return Policy</p>
     <p>Shipping Policy</p>
        </div> */}
        
        <p>&copy; Copyright 2024 . All rights reserved.</p>
        {/* <p>Contact us: watchcart@gmail.com</p> */}
      </div>
    </footer>
  );
};

export default Footer;
