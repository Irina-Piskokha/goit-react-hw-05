import s from "./BtnLoadMore.module.css";

const BtnLoadMore = ({ handleLoadMoreClick }) => {
  return (
    <button onClick={handleLoadMoreClick} className={s.btnLoadMore}>
      Load more
    </button>
  );
};

export default BtnLoadMore;
