import s from "./MovieSliderList.module.css";
import { Link } from "react-router-dom";

const MovieSliderList = ({ films }) => {
  return (
    <div className={s.sliderContainer}>
      <ul className={s.list}>
        {films.map((item) => (
          <li key={item.id} className={s.item}>
            <Link to={`/movies/${item.id}`} className={s.link}>
              {item.backdrop_path ? (
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.original_title}
                  loading="lazy"
                />
              ) : (
                <p className={s.castNoImage}>No poster</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSliderList;
