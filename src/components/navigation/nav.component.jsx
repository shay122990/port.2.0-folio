import { useContext, useState } from "react";
import "./nav.styles.css";
import { DarkModeToggle } from "../dark-mode-toggle/dark-mode-toggle";
import { ThemeContext } from "../../ThemeContext";
import logo from "../../media/logo.png";
export const NavBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}>
      <button
        className="mobile-menu-icon"
        onClick={toggleMenu}
        aria-label={mobileMenu ? "Close Menu" : "Open Menu"}
      >
        <i
          className={`fa-solid ${
            mobileMenu ? "fa-xmark" : "fa-bars"
          } menu-icon`}
        />
      </button>
      <ul
        className={mobileMenu ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobileMenu(false)}
      >
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shay122990"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github nav-icon"></i>
          </a>
        </li>
      </ul>
      <div className="logo-container">
        <img className="logo" src={logo} alt={logo} />
      </div>
      <DarkModeToggle />
    </nav>
  );
};
