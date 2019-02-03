# react-router-utilities

Basic example for `<ProtectRoute />`

If the test passes it will redirect to the specified path.
Otherwise it will either use the render prop to render the component or its children.

```jsx
const authed = false;

const HomePage = (props) => <div id="homepage">Home page.</div>

<ProtectedRoute
  path="/home"
  redirect={{ test: authed === false, path: "/signup" }}
  render={props => <Homepage {...props} /> }
/>

// or

<ProtectedRoute
  path="/home"
  redirect={{ test: authed === true, path: "/signup" }}
>
  <Homepage {...props} />
</ProtectedRoute>
```

```jsx
import React from "react";
import { Route, Redirect } from "react-router-dom";

const this.props.isAuthed = false;

<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: false },
    // Redirect to the first passed test.
    { path: "/sign-in", test: this.props.isAuthed }
  ]}
>
  <Switch>
    <Route path="/welcome" component={Welcome} />
    <Route
      exact
      path={"/setup-market"}
      render={() => <Redirect to={"/setup-market/add-payment"} />}
    />
  </Switch>
</ProtectedRouteGroup>
```

or

```js
  <ProtectedRoutes
      Component={() => <div>test</div>}
    redirectChoices={[
      {path: '/welcome', test: false},
      {path: '/wecomess', test: false}
    ]}
  >
```
