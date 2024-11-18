import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../types";
import { FocusKeys } from "../../../core/constants";
import { FocusableElement, useFocusable } from "../../../core/focus";
import { Card } from "../../ui";
import { links } from "../../../core/links";
import { routes } from "../../../router";
import { pageScrollService } from "../../../services";
import styles from "./Grid.module.css";
import { FocusContext } from "@noriginmedia/norigin-spatial-navigation";

type Props = {
  items: Movie[];
  loading?: boolean;
};

export const Grid: React.FC<Props> = ({ items }) => {
  const { ref, focusKey } = useFocusable({
    focusKey: FocusKeys.Grid,
    saveLastFocusedChild: true,
  });

  const navigation = useNavigate();

  const onCardFocusHandler = useCallback((element: FocusableElement) => {
    pageScrollService.onFocusHandler(element);
  }, []);

  const onPressMovie = useCallback(({ id }: { id: string }) => {
    navigation(routes.details.link(id));
  }, []);

  useEffect(() => {
    pageScrollService.setScrollElement("scroll");
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <section ref={ref} className={styles.grid}>
        <div className={styles.items}>
          {items.map((movie, index) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterUrl={links.moviePoster(movie.poster_path)}
              onFocus={onCardFocusHandler}
              onEnterPress={onPressMovie}
              onBlur={() => {}}
            />
          ))}
        </div>
      </section>
    </FocusContext.Provider>
  );
};
