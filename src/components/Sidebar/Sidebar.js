import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import rectangle from "../../Rectangle.png";
import logo from "../../tv.png";

const Sidebar = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar">
        <div className="logo-details">
          <img src={logo} alt="" />
          <span className="orgName">MovieBox</span>
        </div>

        <ul className="links">
          <Link to="/">
            <li
              className="link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="fas fa-home"></i>
              home
            </li>
          </Link>
          <Link to="/movies">
            <li
              className="link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="fas fa-video"></i>
              movies
            </li>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }}>
            <li className="link">
              <i className="fas fa-tv"></i>
              tv series
            </li>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }}>
            <li className="link">
              <i className="fas fa-calendar"></i>
              upcoming
            </li>
          </Link>
        </ul>

        <img src={rectangle} className="quiz-image" alt="" />

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li className="link">
            <i className="fas fa-sign-out"></i>
            log out
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
