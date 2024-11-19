import { createSelector } from "@reduxjs/toolkit";
import { ID, RootState } from "@/types";

const root = (state: RootState) => state.root;

export const selectMovies = createSelector(root, (state) => state.movies.items);

export const selectMoviesLoading = createSelector(
  root,
  (state) => state.movies.loading
);

export const selectMoviesError = createSelector(
  root,
  (state) => state.movies.error
);

export const selectMoviesFilter = createSelector(
  root,
  (state) => state.movies.filter
);

export const selectFavorites = (state: RootState) => state.root.favorites;

export const isMovieFavorite = (movieId: ID) =>
  createSelector(selectFavorites, (favorites) =>
    favorites.some((movie) => movie.id == movieId)
  );
