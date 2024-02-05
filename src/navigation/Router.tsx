import React, { Suspense } from "react";

import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Loadable =
  <P extends {}>(Component: React.ComponentType<P>) =>
  (props: P) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "users",
          children: [
            {
              path: "",
              element: <UsersList />,
            },
            {
              path: "add",
              element: <UsersAddNew />,
            },
          ],
        },
      ],
    },
  ]);
}

const Dashboard = Loadable(React.lazy(() => import("../pages/Dashboard")));
const UsersList = Loadable(React.lazy(() => import("../pages/Users/List")));
const UsersAddNew = Loadable(React.lazy(() => import("../pages/Users/AddNew")));
