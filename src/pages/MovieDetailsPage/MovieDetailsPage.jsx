import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../services/api";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div>
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
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
