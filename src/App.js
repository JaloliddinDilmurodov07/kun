import React, { useState } from "react";
import "./styles.css";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#ffff" : "grey" }}>☽</span>
      </div>
      <div>
        <h1>This is a {darkMode ? "Dark" : "Light"} Mode </h1>
      </div>
    </div>
  );
}
