import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "@/types";
import { useNavigateBack } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  fetchMovieAction,
  addFavoriteAction,
  removeFavoriteAction,
} from "@/stores/root-slice";
import {
  selectMovie,
  selectMovieError,
  selectMovieLoading,
} from "@/stores/movie/selectors";
import { isMovieFavorite } from "@/stores/movies/selectors";

export const useDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectMovieLoading);
  const error = useAppSelector(selectMovieError);
  const movie = useAppSelector(selectMovie);
  const isFavorite = useAppSelector(isMovieFavorite(id as string));

  const handleFavoriteToggle = (movie: Movie) => {
    if (isFavorite) {
      dispatch(removeFavoriteAction(movie));
    } else if (movie) {
      dispatch(addFavoriteAction(movie));
    }
  };

  useNavigateBack();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieAction(id));
    }
  }, [id, dispatch]);

  return {
    loading,
    error,
    movie,
    isFavorite,
    handleFavoriteToggle,
  };
};
