import { apiClient } from "@/network";
import { Filter, Movie, ID } from "@/types";

export class MovieService {
  public static async fetchMovie(id: ID): Promise<Movie> {
    const { data } = await apiClient.get(`/movie/${id}`);

    return data;
  }

  public static async fetchMovies(filter: Filter): Promise<Movie[]> {
    if (filter === "popular") {
      return MovieService.fetchPopularMovies();
    }

    if (filter === "now") {
      return MovieService.fetchNowPlayingMovies();
    }

    if (filter === "favorites") {
      return MovieService.getFavorites();
    }

    return [];
  }

  public static getFavorites(): Movie[] {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  }

  public static addFavorite(movie: Movie): void {
    const favorites = MovieService.getFavorites();
    // Check if the movie already exists
    const alreadyExists = favorites.some((fav) => fav.id === movie.id);

    if (!alreadyExists) {
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }

  public static removeFavorite(movieId: ID): void {
    const favorites = MovieService.getFavorites();
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  private static async fetchPopularMovies(): Promise<Movie[]> {
    const { data } = await apiClient.get("/movie/popular");

    return data.results;
  }

  private static async fetchNowPlayingMovies(): Promise<Movie[]> {
    const { data } = await apiClient.get("/movie/now_playing");

    return data.results;
  }
}
