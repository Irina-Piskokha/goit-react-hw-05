import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchFilmByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query.length === 0) return;

    const getFilmByQuery = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchFilmByQuery(query);
        if (results.length === 0) {
          toast("There are no movies for your request");
        }
        setFilms(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmByQuery();
  }, [query]);

  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  const filteredData = films.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "#fff",
          },
        }}
      />
      <MovieList films={filteredData} />
    </div>
  );
};

export default MoviesPage;
