import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/types";
import { FocusableElement, FocusProvider } from "@/core/focus";
import { useFocusable } from "@/core/focus";
import { FocusKeys } from "@/core/constants";
import { links } from "@/core/links";
import { routes } from "@/router";
import { useAppSelector } from "@/hooks";
import { selectFavorites } from "@/stores/movies/selectors";
import { pageScrollService } from "@/services";
import { Card } from "@/components/ui";
import styles from "./Grid.module.css";

type Props = {
  items: Movie[];
  loading?: boolean;
};

export const Grid: React.FC<Props> = ({ items }) => {
  const { ref, focusKey } = useFocusable({
    focusKey: FocusKeys.Grid,
    saveLastFocusedChild: true,
    focusable: !!items.length,
  });

  const navigation = useNavigate();

  const favorites = useAppSelector(selectFavorites);

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
    <FocusProvider value={focusKey}>
      <section ref={ref} className={styles.grid}>
        <div className={styles.items}>
          {items.map((movie) => {
            const isFavorite = favorites.some((fav) => fav.id == movie.id);

            return (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                isFavorite={isFavorite}
                posterUrl={links.moviePoster(movie.poster_path)}
                onFocus={onCardFocusHandler}
                onEnterPress={onPressMovie}
                onBlur={() => {}}
              />
            );
          })}
        </div>
      </section>
    </FocusProvider>
  );
};
