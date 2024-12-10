import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api.js";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchTrendingMovies();
        setFilms(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList films={films} location={location} />
    </div>
  );
};

export default HomePage;
