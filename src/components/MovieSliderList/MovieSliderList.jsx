import s from "./MovieSliderList.module.css";
import { Link } from "react-router-dom";
import img from "../../image/no_poster.png";

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
                <img
                  className={s.imgNoPoster}
                  src={img}
                  alt="No poster"
                  loading="lazy"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieSliderList;
