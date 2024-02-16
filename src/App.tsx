import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContextProvider";
import Router from "./navigation/Router";

import i18n from "./i18n";

const App = () => {
  useEffect(() => {
    const preference = localStorage.getItem("preference");
    if (preference) {
      const language = JSON.parse(preference).language;
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("preference", JSON.stringify({ language: "en" }));
    }
  }, []);
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default withTranslation()(App);
