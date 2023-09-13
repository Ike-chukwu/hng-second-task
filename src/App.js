import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import { useContext } from "react";
import { AuthContext } from "./context";
import Loader from "../src/components/Loader/Loader";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const { loading, fetchMovies, setLoading, movies } = useContext(AuthContext);
  console.log(loading, movies);
  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviesPage />} />
        <Route path="/search/:id" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/{movie_id}

// api key

// 267909f17473b5cd32dc214af6fb0171

// import requests

// url = "https://api.themoviedb.org/3/search/movie?query=matrix&include_adult=false&language=en-US&page=1"

// headers = {
//     "accept": "application/json",
//     "Authorization": "Bearer MY_API_KEY"
// }

// response = requests.get(url, headers=headers)

// print(response.text)
