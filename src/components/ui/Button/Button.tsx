import React, { useCallback, PropsWithChildren } from "react";
import cn from "clsx";
import { FocusableElement, useFocusable } from "@/core/focus";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  focusKey?: string;
  type?: "primary" | "secondary";
  onEnterPress: (value?: any) => void;
  onArrowPress?: (direction: string) => boolean;
  onFocus?: (card: FocusableElement, props: any) => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = React.memo(
  ({
    className = "",
    type = "primary",
    focusKey,
    children,
    onEnterPress,
    onArrowPress,
    onFocus,
  }) => {
    const { ref, focused, focusSelf } = useFocusable({
      focusKey,
      onEnterPress: () => onEnterPress(focusKey),
      onArrowPress,
      onFocus,
    });

    const onClickHandler = useCallback(() => {
      focusSelf();
      onEnterPress(focusKey);
    }, [focusKey, focusSelf, onEnterPress]);

    const buttonClassNames = cn([
      styles.button,
      styles[type],
      {
        [styles.focused]: focused,
        [className]: className,
      },
    ]);

    return (
      <button ref={ref} className={buttonClassNames} onClick={onClickHandler}>
        {children}
      </button>
    );
  }
);
