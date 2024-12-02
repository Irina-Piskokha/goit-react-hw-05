import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map((item) => {
        return (
          <li key={item.id} className={s.movie}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
