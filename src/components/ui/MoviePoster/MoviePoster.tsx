import React from "react";
import styles from "./MoviePoster.module.css";
import { StarIcon } from "@/components/icons";

type Props = {
  url: string;
  alt: string;
  isFavorite?: boolean;
};

export const MoviePoster: React.FC<Props> = React.memo(
  ({ url, alt, isFavorite }) => {
    return (
      <div className={styles.container}>
        <img className={styles.poster} src={url} alt={alt}></img>

        {isFavorite ? (
          <label className={styles.icon}>
            <StarIcon />
          </label>
        ) : null}
      </div>
    );
  }
);
