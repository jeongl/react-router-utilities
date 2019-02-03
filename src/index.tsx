import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IRedirectChoices, UndefinedOr } from "./types";

interface IProtectedRouteGroup<RenderFnProps> {
  Component?: React.ComponentType<
    RenderFnProps | Partial<{ path: UndefinedOr<string> }>
  >;
  children?: React.ReactNode;
  defaultPath: string;
  redirectChoices: Array<IRedirectChoices>;
  location: {
    pathname: string;
  };
}

function ProtectedRouteGroup<RenderProps extends object>(
  props: IProtectedRouteGroup<RenderProps>
): JSX.Element {
  const { redirectChoices, Component, children, location, ...rest } = props;
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
          : path !== location.pathname && <Redirect to={{ pathname: path }} />
      }
    />
  );
}

const ProtectedRoute: React.FC<{
  render: React.FunctionComponent;
  redirect: {
    test?: boolean;
    path?: string;
  };
}> = ({ redirect, render: Component, ...rest }): JSX.Element => (
  <Route
    {...rest}
    render={props => {
      return redirect && redirect.test ? (
        <Component {...props} {...rest} />
      ) : (
        (redirect && redirect.path && <Redirect to={redirect.path} />) || (
          <div>test</div>
        )
      );
    }}
  />
);

export { ProtectedRouteGroup, ProtectedRoute };
