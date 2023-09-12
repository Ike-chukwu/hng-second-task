import React from "react";
import "./HeroSection.scss";
import Navbar from "../Navbar/Navbar";
import tomato from '../../tomato.png'
import imdb from '../../imdb.png'

const HeroSection = () => {
  return (
    <div className="heros-section-parent">
      <Navbar />
      <div className="hero-left">
        <div className="title">
          <h1>John Wick 3:</h1>
          <h1>Parabellum</h1>
        </div>
        <div className="imdb-rating">
          <div className="left-side">
            <img src={imdb} className="imdb-pic" alt="" />
            <span className="rating">86.0 / 100</span>
          </div>
          <div className="right-side">
            <img src={tomato} className="tomato" alt="" />
            <span className="rating">97%</span>
          </div>
        </div>
        <p className="content">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="watch-trailer">
          <i className="fas fa-play"></i>
          <h3 className="trailer-text">watch trailer</h3>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
