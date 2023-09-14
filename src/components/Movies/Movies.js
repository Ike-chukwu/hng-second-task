import React, { useContext, useEffect, useState } from "react";
import "./Movies.scss";

import Card from "./Card/Card";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../context";

const Movies = () => {

  const { movies, setMovieId } = useContext(AuthContext);
  const navigate = useNavigate();

  const cardClickHandler = (id) => {
    setMovieId(id);
    navigate(`/movies/${id}`);
  };

  return (
    <section className="movies-pack">
      <div className="title-pack">
        <h1 className="category">featured movie</h1>
        <span className="see-more">
          See more <i className="fas fa-chevron-right"></i>
        </span>
      </div>

      <div className="movie-card-pack">
        {movies?.map((movie) => (
          <Card
            onClick={() => cardClickHandler(movie.id)}
            key={movie.id}
            imgSrc={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Movies;
