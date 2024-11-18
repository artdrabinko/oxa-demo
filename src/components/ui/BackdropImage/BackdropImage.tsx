import React from "react";
import styles from "./BackdropImage.module.css";

type Props = {
  url: string;
};

export const BackdropImage: React.FC<Props> = React.memo(({ url }) => {
  return (
    <div
      className={styles.backdrop}
      style={{
        backgroundImage: url,
      }}
    />
  );
});
