import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/types";

const root = (state: RootState) => state.root;

export const selectMovie = createSelector(root, (state) => state.movie.item);

export const selectMovieLoading = createSelector(
  root,
  (state) => state.movie.loading
);

export const selectMovieError = createSelector(
  root,
  (state) => state.movie.error
);
