# react-router-utilities

Render the children to include the routes.

```jsx
const this.props.isAuthed = false;
<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: false },
    // Redirect to the first passed test.
    { path: "/sign-in", test: this.props.isAuthed }
  ]}
>
  <Route path="/welcome" component={Welcome} />
  <Route
    exact
    path={"/setup-market"}
    render={() => <Redirect to={"/setup-market/add-payment"} />}
  />
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
