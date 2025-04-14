import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import BtnsPage from "../BtnsPage/BtnsPage.jsx";

const MovieList = ({
  films,
  handleLoadMoreClickMinus,
  handleLoadMoreClickPlus,
  page,
}) => {
  const location = useLocation();

  return (
    <>
      <div className={s.sliderContainer}>
        <ul className={s.list}>
          {films?.map((item) => (
            <li key={item.id} className={s.movie}>
              <Link
                to={`/movies/${item.id}`}
                state={location}
                className={s.link}
              >
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
                <h3 className={s.title}>{item.title}</h3>
              </Link>
            </li>
          ))}
          <li className={s.sentinel}></li>
        </ul>
      </div>
      <BtnsPage
        page={page}
        handleLoadMoreClickMinus={handleLoadMoreClickMinus}
        handleLoadMoreClickPlus={handleLoadMoreClickPlus}
      />
    </>
  );
};

export default MovieList;
