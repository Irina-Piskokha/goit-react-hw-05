import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { useEffect, useState, useRef } from "react";
import { fetchMovieById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Suspense } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? `/movies`);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  if (!movie) {
    return <div>No movie details</div>;
  }

  return (
    <div className={"container"}>
      <Link to={goBackLink.current} className={s.btnGoBack}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_title}
        />
        <div className={s.wrapperDescription}>
          <h2 className={s.movieName}>{movie.original_title}</h2>
          <p>Popularity: {movie.popularity}</p>
          <div className={s.wrapperOverview}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className={s.wrapperOverview}>
            <h3>Release date:</h3>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
      <nav className={s.nav}>
        <NavLink to="cast" className={buildLinkClass}>
          Movie Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Movie Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
