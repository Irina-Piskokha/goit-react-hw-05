import s from "./Footer.module.css";
import clsx from "clsx";
import { MdLocalMovies } from "react-icons/md";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={clsx("container", s.footerFlex)}>
        <Logo />
        <div className={s.textFlex}>
          <MdLocalMovies className={s.icon} />
          <p className={s.text}>Your favorite movies in one place</p>
        </div>
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
