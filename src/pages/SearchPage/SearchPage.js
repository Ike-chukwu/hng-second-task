import React, { useEffect } from "react";
import "./SearchPage.scss";
import Card from "../../components/Movies/Card/Card";
import { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
const SearchPage = () => {
  const [loadingSearchedResult, setLoadingSearchedResult] = useState(true);
  const [searchedResult, setSearchedResult] = useState();
  const [error, setError] = useState();
  const { inputValue } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchMovieFromSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI2MGJiMDJkODljMDc3MzhmMDFhZDVhMDkxMmFmNSIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtpF3GXQn3mJd47XRjzmYON_-W5quK1rjHyMyWuBqoQ",
      },
    };

    fetch(
      `
          https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setSearchedResult(response);
        setLoadingSearchedResult(false);
      })
      .catch((err) => {
        setError(err);
        setLoadingSearchedResult(false);
      });
  };

  const cardClickHandler = (id) => {
    navigate(`/movies/${id}`);
  };

  useEffect(() => {
    fetchMovieFromSearch();
  }, []);

   // render a loader while data loads from api
  if (loadingSearchedResult) {
    return <Loader />;
  } 
    // render error component when api request fails
  if(error){
    return <Error/>
  }
  if (searchedResult.results.length < 1) {
    return (
      <div>
        <p className="no-results">Sorry!No results found</p>
        <Link to="/">
          <button className="btn">Back to home</button>
        </Link>
      </div>
    );
  } 
  return (
    <section className="section-grid">
      {searchedResult?.results.map((result) => (
        <Card
          releaseDate={result.release_date}
          title={result.title}
          onClick={() => cardClickHandler(result.id)}
          key={result.id}
          id={result.id}
          imgSrc={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
        />
      ))}
    </section>
  );
};

export default SearchPage;
