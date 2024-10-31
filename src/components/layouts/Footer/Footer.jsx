import React from 'react';

function Footer() {
  return (
    <div className="flex flex-wrap gap-2 mb-6 font-[var(--font-family)]">
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
    <span className="text-[11px] leading-[16px] font-light text-gray-600">
      {children}
    </span>
  );
};



export default Footer;
