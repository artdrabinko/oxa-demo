import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { fetchMoviesAction } from "@/stores/root-slice";
import {
  selectMovies,
  selectMoviesError,
  selectMoviesFilter,
  selectMoviesLoading,
} from "@/stores/movies/selectors";

export const useHomePage = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectMoviesLoading);
  const error = useAppSelector(selectMoviesError);
  const movies = useAppSelector(selectMovies);
  const filter = useAppSelector(selectMoviesFilter);

  useEffect(() => {
    dispatch(fetchMoviesAction());
  }, [filter]);

  return {
    loading,
    error,
    movies,
  };
};
