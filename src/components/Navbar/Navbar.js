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
  // const fetchMovieFromSearch = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc5MDlmMTc0NzNiNWNkMzJkYzIxNGFmNmZiMDE3MSIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f01agXfNCuxLgru1QQotQXMs5q8YvPs07bOgUvzK9TI",
  //     },
  //   };

  //   fetch(
  //     `
  //     https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  const searchMovieHandler = () => {
    if (inputValue.trim() == "") {
      setError(true);
      console.log(error);
      return;
    }
    setError(false);
    fetchMovieFromSearch();
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
