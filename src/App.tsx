import { withTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContextProvider";
import Router from "./navigation/Router";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default withTranslation()(App);
