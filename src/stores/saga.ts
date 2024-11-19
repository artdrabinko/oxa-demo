import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { ID } from "@/types";
import { selectMoviesFilter } from "./movies/selectors";
import {
  fetchMovieAction,
  fetchMovieFailureAction,
  fetchMoviesAction,
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
  fetchMovieSuccessAction,
} from "./root-slice";
import { MovieService } from "@/services";

function* fetchMovies() {
  const filter: ReturnType<typeof selectMoviesFilter> = yield select(
    selectMoviesFilter
  );

  try {
    const movies: Awaited<ReturnType<typeof MovieService.fetchMovies>> =
      yield call(MovieService.fetchMovies, filter);

    yield put(fetchMoviesSuccessAction(movies));
  } catch (error) {
    yield put(fetchMoviesFailureAction((error as Error).message));
  }
}

function* fetchMovie({ payload: movieId }: PayloadAction<ID>) {
  try {
    const movie: Awaited<ReturnType<typeof MovieService.fetchMovie>> =
      yield call(MovieService.fetchMovie, movieId);

    yield put(fetchMovieSuccessAction(movie));
  } catch (error) {
    yield put(fetchMovieFailureAction((error as Error).message));
  }
}

export default function* saga() {
  yield takeLatest(fetchMoviesAction.type, fetchMovies);
  yield takeLatest(fetchMovieAction.type, fetchMovie);
}
