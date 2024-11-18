export function onImageLoad(
  event: React.SyntheticEvent<HTMLImageElement, Event>
) {
  event.currentTarget.style.opacity = "1";
}

type TranslateDirection = "X" | "Y";

export function translate(
  value: number,
  direction: TranslateDirection
): string {
  return `translate${direction}(${value}px)`;
}
