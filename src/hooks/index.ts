import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/types";

export { useHomePage } from "./useHomePage";
export { useDetailsPage } from "./useDetailsPage";
export { useNavigateBack } from "./useNavigateBack";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
