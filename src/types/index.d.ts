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
};
