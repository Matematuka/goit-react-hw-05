import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await getMovieCast(movieId);
        console.log(response);
        setMovieCast(() => response.cast);
      } catch (error) {
        console.log("error: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {movieCast && (
        <ul>
          {movieCast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width={150}
                  alt={name}
                />
                <p>{name}</p>
                <p>
                  <b>Role:</b>
                </p>
                <span>{character}</span>
              </li>
            );
          })}
        </ul>
      )}
      {movieCast.length === 0 && <p>This page is still empty</p>}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  );
};

export default MovieCast;
