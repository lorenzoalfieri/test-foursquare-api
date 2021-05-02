import Dashboard from "../page/Dashboard";

const routes = [
  {
    pageName: "Dashboard",
    path: "/dashboard",
    Component: Dashboard,
    isAuthProtected: false,
  },
];

export default routes;
