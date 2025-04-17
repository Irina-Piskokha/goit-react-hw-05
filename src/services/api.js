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
  return data;
};

export const fetchPopular = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
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
        query,
        language: "en-US",
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
      params: {
        language: "en-US",
      },
    },
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
      params: {
        language: "en-US",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  return data;
};

// ==========================

// export const fetchSearchMovie = async (query, fileSize = "w200") => {
//   if (!query) {
//     console.error("Search query is required!");
//     return [];
//   }

//   try {
// const base_url = await fetchPosters();
// if (!base_url) {
//   throw new Error("Failed to fetch base URL for images.");
// }

// const { data } = await axios.get(
//   "https://api.themoviedb.org/3/search/movie",
//   {
//     params: {
//       query,
//       language: "en-US",
//       page: 1,
//     },
//     headers: {
//       Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
//     },
//   }
// );

// console.log(data);

// const moviesWithPosters = data.results.map((movie) => ({
//   id: movie.id,
//   title: movie.title || "Untitled",
//   release_date: movie.release_date,
//   posterUrl: movie.poster_path
//     ? `https://api.themoviedb.org/3${fileSize}${movie.poster_path}`
//     : "/path-to-placeholder-image.jpg",
// }));

// console.log(moviesWithPosters);

// return moviesWithPosters;
//   } catch (error) {
//     console.error("Error fetching movies:", error.message);
//     return [];
//   }
// };

// fetchSearchMovie("super");
