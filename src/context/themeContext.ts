export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
