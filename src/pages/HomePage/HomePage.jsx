import TrendingToday from "../../components/TrendingToday/TrendingToday.jsx";
import TopRated from "../../components/TopRated/TopRated.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <div className={"container"}>
        <TrendingToday />
        <TopRated />
        <Popular />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
