import React from 'react';
import Logo from './logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <footer>
      <Logo/>
      <div className="footer-content">
      <div className="social-media">
        <InstagramIcon />
        <XIcon />
        <FacebookIcon />
      </div>
      <form className="newsletter">
        <label htmlFor="email">Subscribe to our newsletter:</label>
        <div className="input">
        <input type="email" id="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
        </div>
      </form>
      </div>
      <p
      className='rights'
      >© {new Date().getFullYear()} Nursery Store. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
