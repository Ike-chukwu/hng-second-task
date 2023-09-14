import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../tv.png";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { inputValue, setInputValue, fetchMovieFromSearch } =
    useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const searchMovieHandler = () => {
    if (inputValue.trim() == "") {
      setError(true);
      console.log(error);
      return;
    }
    setError(false);
    navigate(`/search/${inputValue}`);
  };

  return (
    <nav>
      <div className="logo-details">
        <img src={logo} alt="" />
        <span className="orgName">MovieBox</span>
      </div>

      <div
        className="search"
        style={{ border: error ? "0.3rem solid red" : null }}
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="What do you want to watch?"
        />
        <i className="fas fa-search" onClick={searchMovieHandler}></i>
      </div>

      <div className="far-right">
        <span className="sign-in">Sign in</span>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
