import React, { useContext } from "react";
import "./nav.styles.css";
import logo from "../../media/logo.png";
import { DarkModeToogle } from "../dark-mode-toggle/dark-mode-toggle";
import { ThemeContext } from "../../ThemeContext";

export const NavBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const links = [
    { text: "Projects", href: "#projects" },
    { text: "Services", href: "#services" },
    {
      text: "",
      href: "https://github.com/shay122990",
      icon: "fa-brands fa-github nav-icon",
      target: "_blank",
      rel: "noreferrer",
    },
    { text: "Home", href: "#home", logo: true },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];
  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}>
      {links.map((link, index) => (
        <a
          href={link.href}
          key={index}
          target={link.target}
          rel={link.rel}
          className={`anchor ${darkMode ? "dark" : ""}`}
        >
          {link.icon ? <i className={link.icon}></i> : null}
          {link.logo ? <img src={logo} alt='Logo' /> : link.text}
        </a>
      ))}
      <DarkModeToogle />
    </nav>
  );
};
