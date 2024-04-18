import React, { useContext } from "react";
import "./dark-mode-toggle.styles.css";
import { ThemeContext } from "../../ThemeContext";

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`dark_mode ${darkMode ? "dark" : ""}`}>
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleDarkMode}
        checked={darkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </label>
    </div>
  );
};
