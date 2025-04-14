// import s from "./HomePage.module.css";
// import { fetchTrendingMovies } from "../../services/api.js";
// import { useEffect, useState } from "react";
// import MovieList from "../../components/MovieList/MovieList.jsx";
// import Loader from "../../components/Loader/Loader.jsx";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import TrendingToday from "../../components/TrendingToday/TrendingToday.jsx";
import TopRated from "../../components/TopRated/TopRated.jsx";
import Popular from "../../components/Popular/Popular.jsx";

const HomePage = () => {
  return (
    <div className={"container"}>
      <Popular />
      <TrendingToday />
      <TopRated />
    </div>
  );
};

export default HomePage;
