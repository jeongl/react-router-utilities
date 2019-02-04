import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IProtectedRouteGroup, IRedirectChoices, UndefinedOr } from "./types";

function ProtectedRouteGroup<RenderFnProps extends object>(
  props: IProtectedRouteGroup<RenderFnProps>
): JSX.Element {
  const { redirectChoices, Component, children, ...rest } = props;
  const returnObj: UndefinedOr<IRedirectChoices> = redirectChoices.find(
    (option: IRedirectChoices) => option.test
  );
  const path: UndefinedOr<string> = returnObj && returnObj.path;

  return (
    <Route
      {...rest}
      render={props =>
        !path
          ? (Component && <Component path={path} {...rest} />) || children
          : path !== props.location.pathname && (
              <Redirect to={{ pathname: path }} />
            )
      }
    />
  );
}

const ProtectedRoute: React.FC<{
  path: string;
  render?: React.ComponentType<any>;
  children?: React.ReactNode;
  redirect: {
    test: boolean;
    path: string;
  };
}> = ({ render: Component, children, redirect, ...rest }): JSX.Element => (
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
