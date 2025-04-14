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
