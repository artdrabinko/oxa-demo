import React, { useCallback, useMemo } from "react";
import cn from "clsx";
import { FocusableElement, useFocusable } from "../../../core/focus";
import { ID } from "../../../types";
import styles from "./Card.module.css";

interface Props {
  id: ID;
  title: string;
  posterUrl: string;
  onFocus: (card: FocusableElement, props: any) => void;
  onEnterPress: (props: CardPressEvent) => void;
  onBlur?: (card: FocusableElement, props: any) => void;
}

type CardPressEvent = {
  id: string;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  posterUrl,
  onFocus,
  onBlur,
  onEnterPress,
}) => {
  const extraProps = useMemo(
    () =>
      ({
        id,
      } as CardPressEvent),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  const { ref, focused, focusSelf } = useFocusable<CardPressEvent>({
    focusKey: `Card/#/${id}`,
    onFocus,
    onBlur,
    onEnterPress,
    extraProps,
  });

  const onClickHandler = useCallback(() => {
    focusSelf();
    onEnterPress(extraProps);
  }, [extraProps, focusSelf, onEnterPress]);

  const cardClasses = cn([
    styles.card,
    {
      [styles.focused]: focused,
    },
  ]);

  return (
    <div ref={ref} className={cardClasses} onClick={onClickHandler}>
      <img className={styles.poster} src={posterUrl} alt={title} />

      <div className={styles.title}>{title}</div>
    </div>
  );
};
