import s from "./Header.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";

const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={clsx("container", s.headerFlex)}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
