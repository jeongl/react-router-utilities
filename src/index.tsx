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
}> = ({ Component, children, redirectChoices, ...rest }) => {
  const returnObj: TypeOrUndefined<
    RouteInterface
  > = (redirectChoices as any).find((option: RouteInterface) => option.test);
  const path: TypeOrUndefined<string> = returnObj && returnObj.path;

  return (
    <Route
      {...rest as any}
      render={props =>
        !path ? (
          <Router>
            <Switch>
              {Component && <Component path={path} {...rest} />} || {children}
            </Switch>
          </Router>
        ) : (
          path !== location.pathname && (
            <Redirect to={{ pathname: (returnObj as RouteInterface).path }} />
          )
        )
      }
    />
  );
};

export { ProtectedRoutes };
