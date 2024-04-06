import { Link } from "react-router-dom";
import { forwardRef } from "react";

const MovieList = forwardRef(function MovieList({ movies }, ref) {
  return (
    <div>
      <ul ref={ref}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to="/movies/:movieid">{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default MovieList;
