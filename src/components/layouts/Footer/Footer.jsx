import React from 'react';

function Footer() {
  return (
    <div className="flex flex-wrap gap-1.5">
      <FooterLink>Help</FooterLink>
      <FooterLink>Status</FooterLink>
      <FooterLink>About</FooterLink>
      <FooterLink>Careers</FooterLink>
      <FooterLink>Press</FooterLink>
      <FooterLink>Blog</FooterLink>
      <FooterLink>Privacy</FooterLink>
      <FooterLink>Terms</FooterLink>
      <FooterLink>Text to speech</FooterLink>
      <FooterLink>Teams</FooterLink>
    </div>
  );
}

const FooterLink = ({ children }) => {
  return (
    <span className="text-xs text-secondary">
      {children}
    </span>
  );
};



export default Footer;
