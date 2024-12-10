import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Empty from "../Empty/Empty";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchMovieReviews(movieId);
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setReviews(results);
      } catch (error) {
        setIsError(true);
        setIsEmpty(false);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isEmpty && <Empty />}
      <ul className={s.reviewList}>
        {reviews.map((item) => {
          return (
            <li key={item.id} className={s.reviewItem}>
              <h2 className={s.reviewAuthor}>Author: {item.author}</h2>
              <p className={s.reviewText}>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
