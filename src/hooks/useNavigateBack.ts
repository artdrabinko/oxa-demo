import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyboardService } from "@/services";
import { Keycodes } from "@/core/constants";

export const useNavigateBack = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  useEffect(() => {
    keyboardService.addHandler(Keycodes.KEY_BACK, navigateBack);

    return () => {
      keyboardService.removeHandler(Keycodes.KEY_BACK);
    };
  }, []);

  return navigateBack;
};
