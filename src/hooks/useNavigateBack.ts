import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { keyboardService } from "@/services";
import { Keycodes } from "@/core/constants";

export const useNavigateBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateBack = () => navigate(-1);

    keyboardService.addHandler(Keycodes.KEY_BACK, navigateBack);

    return () => {
      keyboardService.removeHandler(Keycodes.KEY_BACK);
    };
  }, []);
};
