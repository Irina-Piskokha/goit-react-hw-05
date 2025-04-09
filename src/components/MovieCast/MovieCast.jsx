import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCredits();
  }, [movieId]);

  if (!cast) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={s.castList}>
        {cast.map((item) => {
          return (
            <li key={item.cast_id} className={s.castItem}>
              {item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                  alt={item.name}
                />
              ) : (
                <p className={s.castNoImage}>No poster</p>
              )}

              <h2 className={s.castName}>{item.original_name}</h2>
              <p className={s.castCharacter}>{item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
