import { Formik, Field, Form } from "formik";
import { useState, useRef, useEffect } from "react";
import { fetchMoviesPage } from "../services/api";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const notify = () =>
  toast("This field cannot be empty. Please enter a search query", {
    duration: 4000,
    position: "top-left",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const message = () =>
  toast("There are no images. Please enter another request", {
    duration: 4000,
    position: "top-left",
    style: {
      borderRadius: "10px",
      background: "#387ce1",
      color: "#fff",
    },
  });

const pagination = 15;

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  const listRef = useRef(null);

  const loadMore = () => setCurrentPage((prev) => prev + 1);

  const onSearchQuery = (searchTerm) => {
    if (query !== searchTerm) {
      setMovies([]);
      setCurrentPage(1);
      setQuery(searchTerm);
    }
  };

  const handleSubmit = (values) => {
    if (values.searchTerm !== "") {
      onSearchQuery(values.searchTerm);
    } else {
      notify();
    }
  };
  useEffect(() => {
    if (query.length === 0) return;
    async function fetchSearchMovie() {
      try {
        setIsLoading(true);
        const response = await fetchMoviesPage(query, currentPage, pagination);
        setMaxPage(response.total_pages);
        setMovies((movies) => [...movies, ...response.results]);
        if (response.total_results === 0) {
          message();
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchMovie();
  }, [query, currentPage]);

  return (
    <div>
      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field
              type="text"
              name="searchTerm"
              autoComplete="off"
              autoFocus
              placeholder="Search movie..."
            />
          </label>
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </Formik>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MovieList movies={movies} ref={listRef} />
      {movies.length !== 0 && currentPage < maxPage && (
        <LoadMoreBtn onLoadMore={loadMore} />
      )}
    </div>
  );
};

export default MoviesPage;
