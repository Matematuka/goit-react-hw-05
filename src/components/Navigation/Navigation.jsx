import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";

import clsx from "clsx";
import css from "./Navigation.module.css";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home Page
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieid/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
