import React from "react";
import "./Movies.scss";

import Card from "./Card/Card";

const Movies = () => {
  return (
    <section className="movies-pack">
      <div className="title-pack">
        <h1 className="category">featured movie</h1>
        <span className="see-more">
          See more <i className="fas fa-chevron-right"></i>
        </span>
      </div>

      <div className="movie-card-pack">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  );
};

export default Movies;
