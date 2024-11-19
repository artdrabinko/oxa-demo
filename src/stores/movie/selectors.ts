import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/types";

const global = (state: RootState) => state.global;

export const selectMovie = createSelector(global, (state) => state.movie.item);

export const selectMovieLoading = createSelector(
  global,
  (state) => state.movie.loading
);

export const selectMovieError = createSelector(
  global,
  (state) => state.movie.error
);
