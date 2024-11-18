import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDetailsPage } from "../../hooks";
import { apiClient } from "../../network";
import { BackdropImage, MoviePoster } from "../../components/ui";
import styles from "./Details.module.css";

interface MovieDetails {
  title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  genres: { name: string }[];
}

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useDetailsPage();

  const fetchMovieDetails = async () => {
    try {
      const response = await apiClient.get(`/movie/${id}`);
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

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

        {/* Movie Info */}
        <div style={{ marginLeft: "40px", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            {movie.title}
          </h1>
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
    </div>
  );
};
