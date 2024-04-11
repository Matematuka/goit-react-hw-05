import axios from "axios";

const instance = axios.create({
  baseURL: " https://api.themoviedb.org/3",
});

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDc0OGRiNTVhMThjN2QxNzg1ODkzOTE0YjY1OWViNCIsInN1YiI6IjY2MGVlN2I4NWFhZGM0MDE0OTYzNTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwV41cGxMc2HGH9eWewv2gmR2sjoGuKP7LPcQkG3QtM",
  },
  params: {
    api_key: "54748db55a18c7d1785893914b659eb4",
  },
};

export const fetchHomePage = async () => {
  const response = await instance.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data;
};

export const getMoviesPage = async (query) => {
  const response = await instance.get(`/search/movie?query=${query}`, options);
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}

export const getMovieDetails = async (id) => {
  const response = await instance.get(`/movie/${id}`, options);
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

export const getMovieReviews = async (id) => {
  const response = await instance.get(`/movie/${id}/reviews`, options);
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits

export const getMovieCast = async (id) => {
  const response = await instance.get(`/movie/${id}/credits`, options);
  return response.data;
};
