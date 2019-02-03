interface RouteInterface {
  path: string;
  test: boolean;
}

type TypeOrUndefined<T> = T | undefined;

interface Props {
  render: any;
  redirect: {
    test?: boolean;
    path?: string;
  };
}

export { RouteInterface, TypeOrUndefined, Props };
