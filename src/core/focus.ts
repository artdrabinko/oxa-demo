import {
  FocusContext,
  useFocusable as useFocusableHook,
  FocusableComponentLayout,
  // @ts-ignore
  SpatialNavigation,
} from "@noriginmedia/norigin-spatial-navigation";

export interface FocusableElement extends FocusableComponentLayout {}

export const FocusProvider = FocusContext.Provider;

export const useFocusable = useFocusableHook;

export const spatialNavigation = SpatialNavigation;
