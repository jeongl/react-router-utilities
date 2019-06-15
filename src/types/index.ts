import { RouteComponentProps } from "react-router-dom";

interface Props<T = {}> {
  Component: React.ComponentType<
    RouteComponentProps & T & { path: string | undefined; newpath: any } | any
  >;
  children?: React.ReactNode;
  redirectChoices: Array<RedirectChoice>;
}

interface RedirectChoice {
  path: string;
  test: boolean;
}

type UndefinedOr<T> = T | undefined;

export { RedirectChoice, UndefinedOr, Props };
