import React, { useCallback, useEffect } from "react";
import { Filter, Page } from "@/types";
import { FocusProvider, FocusHandler, useFocusable } from "@/core/focus";
import { FocusKeys } from "@/core/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setMoviesFilterAction } from "@/stores/root-slice";
import { selectMoviesFilter } from "@/stores/movies/selectors";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./Menu.module.css";

interface Props {}

const pages: Page[] = [
  {
    id: "popular",
    label: "Popular",
  },
  {
    id: "now",
    label: "Airing now",
  },
  {
    id: "favorites",
    label: "Favorite",
  },
];

export const Menu: React.FC<Props> = React.memo(() => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(selectMoviesFilter);

  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: FocusKeys.Menu,
    preferredChildFocusKey: FocusKeys.MenuItem(selectedFilter),
  });

  const onFocus: FocusHandler<{ id: string }> = useCallback((_, props) => {
    dispatch(setMoviesFilterAction(props.id as Filter));
  }, []);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusProvider value={focusKey}>
      <nav ref={ref} className={styles.container}>
        {pages.map(({ id, label }) => {
          return (
            <MenuItem
              key={id}
              id={String(id)}
              label={label}
              focusKey={FocusKeys.MenuItem(id)}
              active={selectedFilter === id}
              onFocus={onFocus}
            />
          );
        })}
      </nav>
    </FocusProvider>
  );
});
