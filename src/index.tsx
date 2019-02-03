import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteInterface, TypeOrUndefined } from "./types";

// type Component = React.

const ProtectedRouteGroup: React.FC<{
  Component?: any;
  children?: React.ReactNode;
  defaultPath: string;
  redirectChoices: Array<RouteInterface>;
  location: {
    pathname: string;
  };
}> = ({ redirectChoices, Component, children, location, ...rest }) => {
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

interface Props {
  render: any;
  redirect: {
    test?: boolean;
    path?: string;
  };
}

const ProtectedRoute: React.FC<Props> = ({
  redirect,
  render: Component,
  ...rest
}) => (
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

function Div<T>(props: { value: string } & T) {
  const { value, ...rest } = props as any; // spreading on generics not yet supported

  return <div {...rest} />;
}

export { ProtectedRouteGroup, ProtectedRoute };
