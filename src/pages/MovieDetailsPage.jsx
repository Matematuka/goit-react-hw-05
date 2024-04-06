import { Route, Routes, Link, useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import { useState, useEffect } from "react";

const MovieDetailsPage = () => {
  // const [detailsMovie, setDetailsMovie] = useState(null);
  const { movieid } = useParams();
  // useEffect(() => {
  //   if (query.length === 0) return;
  //   async function fetchSearchMovie() {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetchMoviesPage(query, currentPage, pagination);
  //       setMaxPage(response.total_pages);
  //       setMovies((movies) => [...movies, ...response.results]);
  //       if (response.total_results === 0) {
  //         message();
  //       }
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchSearchMovie();
  // }, [query, currentPage]);
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h1>Movie ({movieid})</h1>
        <h2>Overview</h2>
        <p>Description</p>
        <h2>Genres</h2>
        <p>Drama</p>
      </div>
      <div>
        <p>Additional Information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
