import { RouteComponentProps } from "react-router-dom";

export declare module "react-router-utilities" {
  interface Props<T = {}> {
    Component: React.ComponentType<RouteComponentProps & T>;
    children?: React.ReactNode;
    redirectChoices: RedirectChoice[];
  }
  export interface RedirectChoice {
    path: string;
    test: boolean;
  }

  export const ProtectedRouteGroup: <T extends {}>(
    props: Props<T>
  ) => JSX.Element;
}
