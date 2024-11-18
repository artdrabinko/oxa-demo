import React from "react";
import styles from "./MoviePoster.module.css";

type Props = {
  url: string;
  alt: string;
};

export const MoviePoster: React.FC<Props> = React.memo(({ url, alt }) => {
  return <img className={styles.poster} src={url} alt={alt} />;
});
