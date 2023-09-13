import React from "react";
import "./Card.scss";
import tomato from "../../../tomato.png";
import imdb from "../../../imdb.png";
import movie from "../../../Poster-1.png";
import fav from "../../../Favorite.png";

const Card = (props) => {
  return (
    <div className="card" data-testid="movie-card" onClick={props.onClick}>
      <img
        src={props.imgSrc}
        className="movie-poster"
        data-testid="movie-poster"
        alt=""
      />
      <p className="release-date" data-testid=" movie-release-date">
        {props.releaseDate}
      </p>
      <h3 className="movie-title" data-testid=" movie-title">
        {props.title}
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
      <img src={fav} className="fav" alt="" />
    </div>
  );
};

export default Card;
