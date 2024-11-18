import React, { useCallback, useEffect } from "react";
import {
  FocusContext,
  FocusHandler,
} from "@noriginmedia/norigin-spatial-navigation";
import { useFocusable } from "../../../core/focus";
import { FocusKeys } from "../../../core/constants";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./Menu.module.css";

type Page = {
  id: string;
  name: string;
};

interface Props {
  pages: Page[];
  currentPage: Page | null;
  onPageChange: (id: string) => void;
}

export const Menu: React.FC<Props> = ({ pages, currentPage, onPageChange }) => {
  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: FocusKeys.Menu,
    // preferredChildFocusKey: FocusKeys.MenuItem(pages[0].id),
  });

  const onFocus: FocusHandler<{ id: string }> = useCallback(
    (_, props) => {
      onPageChange(props.id);
    },
    [ref, , onPageChange]
  );

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <nav ref={ref} className={styles.container}>
        {pages.map(({ id, name }) => {
          return (
            <MenuItem
              key={id}
              id={String(id)}
              name={name}
              focusKey={FocusKeys.MenuItem(id)}
              active={currentPage?.id === id}
              onFocus={onFocus}
            />
          );
        })}
      </nav>
    </FocusContext.Provider>
  );
};
