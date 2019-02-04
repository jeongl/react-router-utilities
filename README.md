# react-router-utilities

The available utilities created so far protects groups of routes. Also allows for multiple redirect scenarios.

## Installation

`npm i react-router-utilities`

## Peer dependencies

`react`
`react-router-dom`

## API

## `<ProtectedRouteGroup />`

Define an array of possible redirect paths, which will redirect if the test evaluates to true. If all the tests fail, it will render the supplied component using the `Component` prop, or render its children.

```jsx
import { React } from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRouteGroup } from "react-router-utilities";

const isAuthed = false;

// Will redirect to '/sign-in'
<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: isAuthed },
    { path: "/sign-in", test: !isAuthed }
  ]}
>
  //...
</ProtectedRouteGroup>;
```

All tests fail, can use `Component` to render.

```jsx
<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: false },
    { path: "/sign-in", test: false }
  ]}
  Component={props => <YourComponent {...props} />}
>
  //...
</ProtectedRouteGroup>
```

All tests fail, render children option.

```jsx
<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: false },
    { path: "/sign-in", test: false }
  ]}
>
  <Switch>
    <Route path="/welcome" component={Welcome} />
    <Route exact path={"/setup"} render={props => <Setup {...props} />} />
  </Switch>
</ProtectedRouteGroup>
```

## `<ProtectedRoute />`

If the provided test is true it will redirect to the specified path.
Otherwise it will either use the render prop to render the component or its children.

- **`<ProtectedRoute />` is a wrapper around `<Route />`. It passes the `path` parameter (also spreads props that you include) and will only run if the path matches like how react-router is used.**
- **`<ProtectedRouteGroup />` allows a short circuit to redirect immediately but does not require a path match.**

```jsx
const authed = false;

<ProtectedRoute
  path="/home"
  redirect={{ test: !authed, path: "/signup" }}
  render={props => <YourComponent {...props} />}
/>;
```

or

```jsx
<ProtectedRoute path="/home" redirect={{ test: !authed, path: "/signup" }}>
  <Homepage {...props} />
</ProtectedRoute>
```
