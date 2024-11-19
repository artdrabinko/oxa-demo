import { rootStore } from "@/stores";

type ID = string | number;

type Nullable<T> = T | null;

export interface Keycodes {
  [keycode: string]: number;
}

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  genres: { name: string }[];
};

export type Filter = "popular" | "now" | "favorites";

type Page = {
  id: Filter;
  label: string;
};

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;
