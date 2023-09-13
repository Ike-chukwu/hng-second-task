import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingSearchedResult, setLoadingSearchedResult] = useState(false);
  const [movieId, setMovieId] = useState();
  const [inputValue, setInputValue] = useState("");

  const fetchMovies = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgxYTExNDRkZTBjZmU0MTQ3M2JiMWJhNWY5ZmQxMyIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ew72etpKjLpK19uDVAAWVXOk0gwuJ5EuP-T6h02klI",
      },
    };
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );

      const response = await data.json();
      const movies = response.results.slice(0, 10);
      setMovies(movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
      // setLoading(false);
    }
  };

  //fetch movie from input field value
  const fetchMovieFromSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc5MDlmMTc0NzNiNWNkMzJkYzIxNGFmNmZiMDE3MSIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f01agXfNCuxLgru1QQotQXMs5q8YvPs07bOgUvzK9TI",
      },
    };

    fetch(
      `
      https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => {response.json(); setLoadingSearchedResult(false)})
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!movies) {
      fetchMovies();
    }
  }, [movies]);

  return (
    <AuthContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        fetchMovies,
        movieId,
        setMovieId,
        inputValue,
        setInputValue,
        fetchMovieFromSearch,
        loadingSearchedResult,
        setLoadingSearchedResult,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
