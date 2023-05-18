import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg_primary text-base-content">
      <div>
        <img src="/logo.png" alt="cloud-palace-logo" className="w-24 h-16" />
        <p className="text-xl text-white font-semibold">Cloud Palace</p>
        <small className="text-xs text-white font-medium">
          Selling toys since 2016
        </small>
      </div>
      <div>
        <span className="text-xl text-white font-semibold">Copyrights</span>
        <a className="link link-hover text-white font-sm">Terms of use</a>
        <a className="link link-hover text-white font-sm">Privacy policy</a>
      </div>
      <div>
        <span className="text-xl text-white font-semibold">Contact us</span>
        <a className="link link-hover text-white font-sm">cloud@palace.com</a>
        <a className="link link-hover text-white font-sm">+991 9898 4259</a>
      </div>
      <div>
        <span className="text-xl text-white font-semibold">Social Media</span>
        <a className="link link-hover text-white font-sm">Facebook</a>
        <a className="link link-hover text-white font-sm">Instagram</a>
        <a className="link link-hover text-white font-sm">Twitter</a>
      </div>
      <div>
        <span className="text-xl text-white font-semibold">Address</span>
        <a className="link link-hover text-white font-sm">
          Cloud Factory, Buckingham Palace, London, United Kingdom
        </a>
      </div>
    </footer>
  );
};

export default Footer;
