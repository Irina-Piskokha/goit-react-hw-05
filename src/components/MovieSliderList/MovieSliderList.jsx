import s from "./MovieSliderList.module.css";
import { Link } from "react-router-dom";

const MovieSliderList = ({ films, filteredData }) => {
  return (
    <>
      <ul className={s.list}>
        {(filteredData?.length > 0 ? filteredData : films).map((item) => (
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
                <p className={s.movieNoPoster}>No poster</p>
              )}
              <p className={s.title}>{item.original_title}</p>
              <p className={s.titleDate}>{item.release_date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieSliderList;
