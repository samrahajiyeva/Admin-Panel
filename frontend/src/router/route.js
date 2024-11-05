import Add from "../Admin/pages/Add/Add";
import AdminRoot from "../Admin/pages/AdminRoot/AdminRoot";
import AdminUser from "../Admin/pages/AdminUser/AdminUser";
import Dashboard from "../Admin/pages/Dashboard/Dashboard";
import Data from "../Admin/pages/Data/Data";

export const ROUTES = [
  {
    path: "/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "acc",
        element: <AdminUser />,
      },
    ],
  },
];
