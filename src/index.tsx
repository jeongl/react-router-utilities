import React from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  RouteComponentProps
} from "react-router-dom";
import { Props, RedirectChoice } from "../index.d.ts";

const ProtectedRouteGroup = <T extends React.FC<T & Props<T>>>(
  props: Props<T>
): JSX.Element => {
  const { redirectChoices, Component, children, ...rest } = props;
  const returnObj: RedirectChoice | undefined = redirectChoices.find(
    (option: RedirectChoice) => option.test
  );
  const path: string | undefined = returnObj && returnObj.path;

  return (
    <Router>
      <Route
        {...rest}
        render={props =>
          !path
            ? (Component && <Component newpath={path} {...rest} />) || children
            : path !== props.location.pathname && (
                <Redirect to={{ pathname: path }} />
              )
        }
      />
    </Router>
  );
};

interface ProtectedRouteProps<T = {}> {
  path: string;
  render?: React.ComponentType<T & RouteComponentProps>;
  children?: React.ReactChildren;
  redirect: {
    test: boolean;
    path: string;
  };
  test: string;
}

const ProtectedRoute = <P extends React.FC<P | ProtectedRouteProps>>({
  render: Component,
  children,
  redirect,
  ...rest
}: ProtectedRouteProps & P): JSX.Element => (
  <Route
    {...rest}
    render={props => {
      return redirect.test
        ? (Component && <Component {...props} {...rest} />) || children
        : redirect.path && <Redirect to={redirect.path} />;
    }}
  />
);

export { ProtectedRouteGroup, ProtectedRoute };
