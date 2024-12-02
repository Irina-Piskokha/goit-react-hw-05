import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api.js";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setfilms(results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <MovieList films={films} />
    </div>
  );
};

export default HomePage;
