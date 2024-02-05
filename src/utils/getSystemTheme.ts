import { Theme } from "../context/themeContext";

export const getSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return Theme.DARK;
  }
  return Theme.LIGHT;
};
