import s from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={s.logo}>
        YOUR<span>Movie</span>
      </NavLink>
    </>
  );
};

export default Logo;
