import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./api/movies";

function App() {
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    getMovies("troya").then((res) => {
      setMovies(Boolean(res.Search));
    });
  }, []);
  return (
    <>
      <h4>Movies</h4>
      {movies ? "Yes" : "No"}
    </>
  );
}

export default App;
