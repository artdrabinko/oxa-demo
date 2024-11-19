import { useDetailsPage } from "@/hooks";
import { BackdropImage, Button, MoviePoster } from "@/components/ui";
import styles from "./Details.module.css";
import { FocusProvider } from "@/core/focus";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

export const Details: React.FC = () => {
  const { movie, loading, isFavorite, handleFavoriteToggle, navigateBack } =
    useDetailsPage();

  const { ref, focusKey, focusSelf } = useFocusable({
    preferredChildFocusKey: "back",
  });

  useEffect(() => {
    focusSelf();
  }, []);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <FocusProvider value={focusKey}>
      <div ref={ref} className={styles.page}>
        <BackdropImage
          url={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
        />

        <div className={styles.details}>
          <MoviePoster
            url={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            isFavorite={isFavorite}
          />

          <div className={styles.meta}>
            <h1 className={styles.title}>{movie.title}</h1>

            <p className={styles.releaseDate}>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className={styles.rating}>
              <strong>Rating:</strong> {movie.vote_average}/10
            </p>
            <p className={styles.genres}>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button focusKey="back" onEnterPress={navigateBack}>
            <label>Back</label>
          </Button>

          <Button
            onEnterPress={() => {
              handleFavoriteToggle(movie);
            }}
          >
            <label>
              {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
            </label>
          </Button>
        </div>
      </div>
    </FocusProvider>
  );
};
