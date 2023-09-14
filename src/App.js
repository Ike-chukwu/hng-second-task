import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import { useContext } from "react";
import { AuthContext } from "./context";
import Loader from "../src/components/Loader/Loader";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const { loading} = useContext(AuthContext);
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

