import React from "react";
import './Card.scss'
import tomato from "../../../tomato.png";
import imdb from "../../../imdb.png";
import movie from "../../../Poster-1.png";

const Card = () => {
  return (
    <div className="card" data-testid=" movie-card">
      <img src={movie} data-testid="movie-poster" alt="" />
      <p className="release-date">2001</p>
      <h3 className="movie-title" data-testid=" movie-title">
        bad boys
      </h3>
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
      <span className="movie-type">action, adventure, horror</span>
    </div>
  );
};

export default Card;
