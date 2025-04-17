import { useEffect, useState } from "react";
import s from "./Popular.module.css";
import { fetchPopular } from "../../services/api.js";
import MovieSliderList from "../MovieSliderList/MovieSliderList.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const Popular = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPopular = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchPopular();
        setFilms(results);
        return results;
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPopular();
  }, []);

  return (
    <div className={s.title}>
      {isError && <ErrorMessage />}
      {isLoading ? <Loader /> : <MovieSliderList films={films} />}
    </div>
  );
};

export default Popular;
