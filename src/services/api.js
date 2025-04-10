import axios from "axios";

const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQzMjJkYzYyZDM5M2I5OTgyZWVlYzM3ODkwOWJlNSIsIm5iZiI6MTczMjg4ODQ0Mi4yMTU4NzE2LCJzdWIiOiI2NzQ5YzUwMjBkYTUyZTI3N2VmNDFkMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GW9x0Sp02x4yGU4dvgMJSrIXxRdlyFQDerCUYhGsdCo";

export const fetchTrendingMovies = async (page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}}`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  console.log(data);
  return data;
};

export const fetchTopRated = async (page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  console.log(data);
  return data;
};

export const fetchPopular = () => {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  console.log(data);
  return data;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return data;
};

export const fetchFilmByQuery = async (query) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return data;
};
