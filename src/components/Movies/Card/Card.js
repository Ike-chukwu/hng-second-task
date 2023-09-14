import React, { useContext, useState } from "react";
import "./Card.scss";
import tomato from "../../../tomato.png";
import imdb from "../../../imdb.png";
import { AuthContext } from "../../../context";

const Card = (props) => {
  const { favs, setFavs } = useContext(AuthContext);
  const [ inFav, setInFav ] = useState(false);

  const likeHandler = (e, id) => {
    e.stopPropagation();
    const isliked = favs.some((item) => item.id == id);
    if (isliked) {
      const newArray = favs.filter((item) => item.id != id);
      setFavs(newArray);
      setInFav(false);
    } else {
      setInFav(true);
      setFavs([...favs, {"id":id}]);
    }
  };

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
      <i
        className="fas fa-heart"
        style={{ color: inFav ? "red" : "unset"}}
        onClick={(e) => likeHandler(e, props.id)}
      ></i>
    </div>
  );
};

export default Card;
