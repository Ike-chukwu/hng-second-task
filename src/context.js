import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState();
  const [inputValue, setInputValue] = useState("");
  const [favs, setFavs] = useState([]);

  const fetchMovies = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI2MGJiMDJkODljMDc3MzhmMDFhZDVhMDkxMmFmNSIsInN1YiI6IjY1MDExMGRkZDdkY2QyMDExYzYwYTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtpF3GXQn3mJd47XRjzmYON_-W5quK1rjHyMyWuBqoQ",
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
    }
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
        favs,
        setFavs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
