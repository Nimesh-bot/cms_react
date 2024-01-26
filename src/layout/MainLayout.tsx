import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

import VerticalNavbar from "./VerticalNavbar";

const MainLayout = () => {
  return (
    <main className="flex h-screen bg-light dark:bg-dark">
      <VerticalNavbar />

      <section className="flex-1 h-full overflow-auto relative">
        <HeaderMenu />
        <div className="wrapper">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MainLayout;
