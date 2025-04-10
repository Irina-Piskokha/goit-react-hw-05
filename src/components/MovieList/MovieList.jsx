import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import BtnsPage from "../BtnsPage/BtnsPage.jsx";

const MovieList = ({
  films,
  handleLoadMoreClickMinus,
  handleLoadMoreClickPlus,
  page,
}) => {
  // const scrollRef = useRef(null);
  const location = useLocation();

  // const handleScroll = () => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
  //   setShowButton(isAtEnd);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleScroll();
  //   }, 100);
  // }, [films, page]);

  return (
    <>
      <div
        className={s.sliderContainer}
        // ref={scrollRef}
        // onScroll={handleScroll}
      >
        <ul className={s.list}>
          {films.map((item) => (
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

      {/* {showButton && <BtnLoadMore handleLoadMoreClick={handleLoadMoreClick} />} */}
    </>
  );
};

export default MovieList;
