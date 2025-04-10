import s from "./BtnsPage.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const BtnsPage = ({
  page,
  handleLoadMoreClickPlus,
  handleLoadMoreClickMinus,
}) => {
  return (
    <div className={s.wrapper}>
      {page === 1 ? (
        <button className={s.btn} disabled={""}>
          <FaLongArrowAltLeft className={s.btnDisable} />
        </button>
      ) : (
        <button onClick={handleLoadMoreClickMinus} className={s.btn}>
          <FaLongArrowAltLeft className={s.arrow} />
        </button>
      )}

      <button onClick={handleLoadMoreClickPlus} className={s.btn}>
        <FaLongArrowAltRight className={s.arrow} />
      </button>
    </div>
  );
};

export default BtnsPage;
