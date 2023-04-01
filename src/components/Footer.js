import React from 'react';
import { Logo } from "./Logo";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="Footer">
      <Logo position="footer" />
      <p className='p-footer'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};