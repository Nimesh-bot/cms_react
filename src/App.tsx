import { BrowserRouter } from "react-router-dom";
import Router from "./navigation/Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
