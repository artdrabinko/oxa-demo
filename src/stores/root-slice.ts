import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, ID, Movie } from "@/types";
import { MovieService } from "@/services";

interface RootSlice {
  movies: {
    loading: boolean;
    items: Movie[];
    error: string;
    filter: Filter;
  };
  movie: {
    loading: boolean;
    item: Movie | null;
    error: string;
  };
  favorites: Movie[];
}

const initialState: RootSlice = {
  movies: {
    loading: false,
    items: [],
    error: "",
    filter: "popular",
  },
  movie: {
    loading: false,
    item: null,
    error: "",
  },
  favorites: MovieService.getFavorites(),
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    fetchMoviesAction(state) {
      state.movies.loading = true;
    },
    fetchMoviesSuccessAction(
      state,
      { payload: movies }: PayloadAction<Movie[]>
    ) {
      state.movies.loading = false;
      state.movies.items = movies;
    },
    fetchMoviesFailureAction(state, { payload }: PayloadAction<string>) {
      state.movies.loading = false;
      state.movies.error = payload;
    },
    setMoviesFilterAction(state, { payload }: PayloadAction<Filter>) {
      state.movies.filter = payload;
    },

    addFavoriteAction(state, { payload: movie }: PayloadAction<Movie>) {
      MovieService.addFavorite(movie); // Update localStorage
      state.favorites = MovieService.getFavorites();
    },
    removeFavoriteAction(state, { payload: movie }: PayloadAction<Movie>) {
      MovieService.removeFavorite(movie.id); // Update localStorage
      state.favorites = MovieService.getFavorites();
    },

    fetchMovieAction(state, { payload }: PayloadAction<ID>) {
      state.movie.loading = true;
    },
    fetchMovieSuccessAction(state, { payload: movie }: PayloadAction<Movie>) {
      state.movie.loading = false;
      state.movie.item = movie;
    },
    fetchMovieFailureAction(state, { payload }: PayloadAction<string>) {
      state.movie.loading = false;
      state.movie.error = payload;
    },
  },
});

export const {
  fetchMoviesAction,
  fetchMoviesSuccessAction,
  fetchMoviesFailureAction,
  addFavoriteAction,
  removeFavoriteAction,
  setMoviesFilterAction,
  fetchMovieAction,
  fetchMovieSuccessAction,
  fetchMovieFailureAction,
} = rootSlice.actions;

export default rootSlice.reducer;
