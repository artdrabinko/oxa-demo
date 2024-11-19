import {
  FocusContext,
  useFocusable as useFocusableHook,
  FocusableComponentLayout,
} from "@noriginmedia/norigin-spatial-navigation";

export type { FocusHandler } from "@noriginmedia/norigin-spatial-navigation";

export interface FocusableElement extends FocusableComponentLayout {}

export const FocusProvider = FocusContext.Provider;

export const useFocusable = useFocusableHook;
