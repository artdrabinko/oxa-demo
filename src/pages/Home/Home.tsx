import { useEffect, useState } from "react";
import { apiClient } from "../../network";
import { Grid } from "../../components/layout";
import { Menu } from "../../components/home";
import styles from "./Home.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const pages = [
  {
    id: "popular",
    name: "Popular",
  },
  {
    id: "airing",
    name: "Airing now",
  },
  {
    id: "favorite",
    name: "Favorite",
  },
];

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch popular movies
  const fetchPopularMovies = async () => {
    try {
      const response = await apiClient.get("/movie/popular?limit=50");
      setMovies(response.data.results); // Store movie data
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div id="scroll" className={styles.container}>
      <Menu pages={pages} currentPage={pages[0]} onPageChange={() => {}} />
      <Grid items={movies} loading={loading} />
    </div>
  );
};
