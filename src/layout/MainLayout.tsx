import { Outlet } from "react-router-dom";

import VerticalNavbar from "./VerticalNavbar";

const MainLayout = () => {
  return (
    <main className="flex gap-x-8 h-screen bg-light dark:bg-dark">
      <VerticalNavbar />

      <section className="flex-1 h-full overflow-scroll">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
