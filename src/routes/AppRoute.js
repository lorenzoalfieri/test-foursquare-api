import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TopAppBar from "../components/AppBar/TopAppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import routes from "../routes/routes";

const AppRoute = () => {
  const [currentRoute, setCurrentRoute] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const asyncFunc = async () => {
      if (currentRoute === null) {
        let newRoute = routes.find((e) => e.path === window.location.pathname);

        if (!newRoute) {
          let defaultRoute = routes.find((e) => e.path === "/dashboard");
          setCurrentRoute(defaultRoute);
          history.push(defaultRoute.path);
        } else {
          setCurrentRoute(newRoute);
        }
      }
    };

    asyncFunc();
  }, [currentRoute]);

  const UpdateRoute = ({ path, setCurrentRoute }) => {
    useEffect(() => setCurrentRoute(routes.find((e) => e.path === path)));
    return <div></div>;
  };

  if (currentRoute === null) {
    return (
      <CircularProgress
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  } else {
    return (
      <div>
        {routes.map((route, index) => (
          <Route path={route.path} key={index}>
            <UpdateRoute setCurrentRoute={setCurrentRoute} path={route.path} />
          </Route>
        ))}
        <TopAppBar
          name={currentRoute.pageName}
          MainContent={currentRoute.Component}
        />
      </div>
    );
  }
};

export default AppRoute;
