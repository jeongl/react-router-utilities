import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

interface RouteInterface {
  path: string;
  test: boolean;
}

type TypeOrUndefined<T> = T | undefined;

const ProtectedRoutes: React.FunctionComponent<{
  Component?: any;
  children?: React.ReactNode;
  defaultPath: string;
  redirectChoices: Array<RouteInterface>;
  location: {
    pathname: string;
  };
}> = ({ Component, children, location, redirectChoices, ...rest }) => {
  const returnObj: TypeOrUndefined<RouteInterface> = redirectChoices.find(
    (option: RouteInterface) => option.test
  );
  const path: TypeOrUndefined<string> = returnObj && returnObj.path;

  return (
    <Route
      {...rest}
      render={props =>
        !path
          ? (Component && <Component path={path} {...rest} />) || children
          : path !== location.pathname && <Redirect to={{ pathname: path }} />
      }
    />
  );
};

const test = () => "test";

export { ProtectedRoutes, ProtectedRoutes as ProtectedRouteGroup, test };
