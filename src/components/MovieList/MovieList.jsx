import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ films, location }) => {
  return (
    <ul className={s.list}>
      {films.map((item) => {
        return (
          <li key={item.id} className={s.movie}>
            <Link to={`/movies/${item.id}`} state={location} className={s.link}>
              {item.backdrop_path ? (
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.original_title}
                />
              ) : (
                <p className={s.castNoImage}>No poster</p>
              )}

              <h3 className={s.title}>{item.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
