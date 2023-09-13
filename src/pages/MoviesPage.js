import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MoviesPage = () => {
  return (
    <div className="movie-page" style={{display:"flex"}}>
      <Sidebar />
      <MovieDetails />
    </div>
  );
};

export default MoviesPage;
