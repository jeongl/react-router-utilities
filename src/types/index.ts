interface IRedirectChoices {
  path: string;
  test: boolean;
}

type UndefinedOr<T> = T | undefined;

export { IRedirectChoices, UndefinedOr };
