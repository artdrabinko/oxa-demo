import React from "react";
import cn from "clsx";
import { FocusHandler, useFocusable } from "@/core/focus";
import styles from "./MenuItem.module.css";

interface Props {
  id: string;
  focusKey: string;
  label: string;
  active: boolean;
  onFocus: FocusHandler<{ id: string }>;
}

export const MenuItem: React.FC<Props> = React.memo(
  ({ id, focusKey, label, active, onFocus }) => {
    const { ref, focused, focusSelf } = useFocusable({
      focusKey,
      onFocus,
      onArrowPress: (direction) => {
        if (direction === "up") return false;
        return true;
      },
      extraProps: {
        id,
      },
    });

    const classNames = cn([
      styles.item,
      {
        [styles.active]: active && !focused,
        [styles.focused]: focused,
      },
    ]);

    return (
      <div ref={ref} className={classNames} onClick={focusSelf}>
        {label}
      </div>
    );
  }
);
