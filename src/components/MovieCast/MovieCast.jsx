import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return <div>Movie Cast</div>;
};

export default MovieCast;
