import { createSelector } from "@reduxjs/toolkit";
import { ID, RootState } from "@/types";

const global = (state: RootState) => state.global;

export const selectMovies = createSelector(
  global,
  (state) => state.movies.items
);

export const selectMoviesLoading = createSelector(
  global,
  (state) => state.movies.loading
);

export const selectMoviesError = createSelector(
  global,
  (state) => state.movies.error
);

export const selectMoviesFilter = createSelector(
  global,
  (state) => state.movies.filter
);

export const selectFavorites = (state: RootState) => state.global.favorites;

export const isMovieFavorite = (movieId: ID) =>
  createSelector(selectFavorites, (favorites) =>
    favorites.some((movie) => movie.id == movieId)
  );
