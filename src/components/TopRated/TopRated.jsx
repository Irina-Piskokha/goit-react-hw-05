import s from "./TopRated.module.css";
import { useState, useEffect } from "react";
import { fetchTopRated } from "../../services/api.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import MovieList from "../MovieList/MovieList.jsx";

const TopRated = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTopRated = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchTopRated(page);
        setFilms(results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTopRated();
  }, [page]);

  const handleLoadMoreClickPlus = () => {
    setPage((prev) => prev + 1);
  };

  const handleLoadMoreClickMinus = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h2 className={s.title}>Top Rated</h2>
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

export default TopRated;
