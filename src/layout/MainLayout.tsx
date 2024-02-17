import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "../context/themeContext";
import { useThemeContext } from "../context/ThemeContextProvider";
import HeaderMenu from "./HeaderMenu";

import VerticalNavbar from "./VerticalNavbar";

const MainLayout = () => {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      switch (localTheme) {
        case "light":
          setTheme(Theme.LIGHT);
          break;
        case "dark":
          setTheme(Theme.DARK);
          break;
        default:
          break;
      }
    }
  }, [setTheme]);

  return (
    <main className={theme}>
      <article className="flex h-screen bg-gradient">
        <VerticalNavbar />

        <section className="flex-1 h-full overflow-auto relative">
          <HeaderMenu />
          <div className="wrapper">
            <Outlet />
          </div>
        </section>
      </article>
    </main>
  );
};

export default MainLayout;
