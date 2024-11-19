import { useDetailsPage } from "@/hooks";
import { BackdropImage, MoviePoster } from "@/components/ui";
import styles from "./Details.module.css";

export const Details: React.FC = () => {
  const { movie, loading, isFavorite, handleFavoriteToggle } = useDetailsPage();

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className={styles.page}>
      <BackdropImage
        url={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}
      />

      <div className={styles.details}>
        <MoviePoster
          url={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        <div className={styles.meta}>
          <h1 className={styles.title}>{movie.title}</h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            {movie.overview}
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            padding: "8px 15px",
            fontSize: "2rem",
            color: "black",
            backgroundColor: "white",
          }}
          onClick={() => {
            handleFavoriteToggle(movie);
          }}
        >
          {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
        </button>
      </div>
    </div>
  );
};
