import "./App.css";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";


function App() {
  return (
    <div className="App">
      <Home/>
      <MoviesPage/>
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/{movie_id}
