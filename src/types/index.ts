interface RouteInterface {
  path: string;
  test: boolean;
}

type TypeOrUndefined<T> = T | undefined;

export { RouteInterface, TypeOrUndefined };
