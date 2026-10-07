import React from "react";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted sm:flex-row md:px-8">
      <p>© {new Date().getFullYear()} Amin Fahimi. All rights reserved.</p>
      <a href="#home" className="hover:text-accent">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
