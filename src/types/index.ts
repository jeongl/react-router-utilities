interface IProtectedRouteGroup<RenderFnProps> {
  Component?: React.ComponentType<
    RenderFnProps | { path: UndefinedOr<string> }
  >;
  children?: React.ReactNode;
  redirectChoices: Array<IRedirectChoices>;
}

interface IRedirectChoices {
  path: string;
  test: boolean;
}

type UndefinedOr<T> = T | undefined;

export { IRedirectChoices, UndefinedOr, IProtectedRouteGroup };
