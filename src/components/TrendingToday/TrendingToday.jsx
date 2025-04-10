import s from "./TrendingToday.module.css";
import { fetchTrendingMovies } from "../../services/api.js";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const TrendingToday = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchTrendingMovies(page);
        setFilms(results);
        // setFilms((prev) => {
        //   const combined = [...prev, ...results];
        //   const unique = combined.filter(
        //     (film, index, self) =>
        //       index === self.findIndex((f) => f.id === film.id)
        //   );
        //   return unique;
        // });
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, [page]);

  const handleLoadMoreClickPlus = () => {
    setPage((prev) => prev + 1);
  };

  const handleLoadMoreClickMinus = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h1 className={s.title}>Trending movies today</h1>
      {isError && <ErrorMessage />}
      {isLoading ? (
        <Loader />
      ) : (
        <MovieList
          films={films}
          handleLoadMoreClickPlus={handleLoadMoreClickPlus}
          handleLoadMoreClickMinus={handleLoadMoreClickMinus}
          page={page}
        />
      )}
    </div>
  );
};

export default TrendingToday;
