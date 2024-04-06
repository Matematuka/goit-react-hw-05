import axios from "axios";

const instance = axios.create({
  baseURL: " https://api.themoviedb.org/3",
});

export const fetchHomePage = async () => {
  const response = await instance.get("/trending/movie/day?language=en-US", {
    params: {
      api_key: "54748db55a18c7d1785893914b659eb4",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDc0OGRiNTVhMThjN2QxNzg1ODkzOTE0YjY1OWViNCIsInN1YiI6IjY2MGVlN2I4NWFhZGM0MDE0OTYzNTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwV41cGxMc2HGH9eWewv2gmR2sjoGuKP7LPcQkG3QtM",
    },
  });
  return response.data;
};

export const fetchMoviesPage = async (query) => {
  const response = await instance.get("/search/movie", {
    params: {
      query,
      api_key: "54748db55a18c7d1785893914b659eb4",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDc0OGRiNTVhMThjN2QxNzg1ODkzOTE0YjY1OWViNCIsInN1YiI6IjY2MGVlN2I4NWFhZGM0MDE0OTYzNTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwV41cGxMc2HGH9eWewv2gmR2sjoGuKP7LPcQkG3QtM",
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await instance.get(`/movie/${id}`, {
    params: {
      api_key: "54748db55a18c7d1785893914b659eb4",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDc0OGRiNTVhMThjN2QxNzg1ODkzOTE0YjY1OWViNCIsInN1YiI6IjY2MGVlN2I4NWFhZGM0MDE0OTYzNTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwV41cGxMc2HGH9eWewv2gmR2sjoGuKP7LPcQkG3QtM",
    },
  });
  return response.data;
};
