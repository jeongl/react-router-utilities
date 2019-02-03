import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteInterface, TypeOrUndefined } from "./types";
import { bool } from "prop-types";

const ProtectedRoutes: React.FC<{
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

const ProtectedRoute: React.FC<{
  test: boolean;
  render: any;
  redirectPath: string;
}> = ({ test, render: Component, redirectPath, ...rest }) =>
  test ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to={redirectPath} />
  );

export { ProtectedRoutes, ProtectedRoute };
