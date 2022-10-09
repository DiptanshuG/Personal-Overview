import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/cover/logo2.png";
import { FaHome } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useState } from "react";

function Nav() {
  //   const [theme, setThemeL] = useState("dark");

  const [changeLight, setChangeLight] = useState(false);

  const lightModeSwitch = () => {
    setChangeLight(!changeLight);

    document.querySelector("body").classList.toggle("Light");
  };
  return (
    <header>
      <nav className="navbar">
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/" title="home" aria-label="home">
              <span>
                <img
                  aria-label="favicon"
                  alt="favicon"
                  src={favicon}
                  style={{ width: "12.25rem" }}
                ></img>
                <h2 style={{ fontSize: "2.25rem", marginRight: "3rem" }}>
                  &nbsp;&nbsp;Diptanshu Bhawsar
                </h2>
              </span>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/">
              <FaHome></FaHome>
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2">
            <a href="#footer">More</a>
          </li>
          <li
            className="mx-2 "
            onClick={() => {
              lightModeSwitch();
            }}
          >
            {changeLight ? <FiSun size={25} /> : <FiMoon size={25} />}
          </li>

          {/* <li
            className="p-2 cursor-pointer relative border-radius-5"
            style={{
              color: "var(--primaryDarkColor)",
              background: "#000022",
            }}
            onClick={() => {
              darkModeSwitch();
            }}
          >
            {theme === "dark" ? (
              <SunIcon
                className="w-6 h-6"
                style={{ color: "var(--primaryDarkColor)" }}
              />
            ) : (
              <MoonIcon
                className="w-6 h-6"
                style={{ color: "var(--primaryDarkColor)" }}
              />
            )}
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
