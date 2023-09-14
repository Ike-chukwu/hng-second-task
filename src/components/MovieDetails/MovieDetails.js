import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import collage from "../../Group 52.png";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInView, setMovieData] = useState();
  let utcString;
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI2MGJiMDJkODljMDc3MzhmMDFhZDVhMDkxMmFmNSIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtpF3GXQn3mJd47XRjzmYON_-W5quK1rjHyMyWuBqoQ", // Replace with your TMDb API key
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );

        if (!response.ok) {
          console.log(response.status);
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setMovieData(data);
        const date = new Date(data.release_date); // Create a Date object for January 1, 2010
        utcString = date.toUTCString();
      } catch (error) {
        console.error(error);
        // Handle the error state here if needed
      }
    };

    fetchMovie();
  }, [id]);

  if (!movieInView) {
    // Data is still loading, you can render a loader or a message here
    return <Loader/>
  }

  // Render the movie details
  return (
    <div className="movie-full-details">
      {/* ... (your movie details rendering code) */}
      <div className="movie-full-details">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w200${movieInView.poster_path}`}
            alt=""
          />
          <i className="fas fa-play"></i>
        </div>
        <div className="bottom-content">
          <div className="bottom-left-content">
            <div className="bottom-left-top-inner-content">
              <h4 className="movie">
                <span data-testid="movie-title">{movieInView.title}</span>
                <span data-testid="movie-release-date">
                  {new Date(movieInView.release_date).toUTCString()} 
                </span>
                <span data-testid="movie-runtime">
                  {(movieInView.runtime / 60).toFixed(2)}
                </span>
              </h4>
              {movieInView.genres.map((category) => (
                <div className="category-movie" key={Math.random()}>
                  {category.name}
                </div>
              ))}
            </div>
            <p className="movie-story" data-testid="movie-overview">
              {movieInView.overview}
            </p>
            <div className="movie-creators">
              <p className="role-name">
                director: <span className="name">Unknown</span>
              </p>
              <p className="role-name">
                writers: <span className="name">Unknown</span>
              </p>
              <p className="role-name">
                stars: <span className="name">Unknown</span>
              </p>
            </div>
            <div className="top-rated">
              <div className="top-rated-tag">top rated movie #65</div>
              <select name="" id="">
                <option value="awards 9 nominations">
                  awards 9 nominations
                </option>
              </select>
            </div>
          </div>

          <div className="bottom-right-content">
            <div className="bottom-right-top-content">
              <i className="fas fa-star"></i>
              <span>8.5 | 350k</span>
            </div>
            <div className="top-rated-tag">
              <i className="fas fa-television"></i> see showtimes
            </div>
            <div className="top-rated-filtered-tag">
              <i className="fas fa-filter"></i> more watch options
            </div>
            <img src={collage} className="collage-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
