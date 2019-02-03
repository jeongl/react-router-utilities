# react-router-utilities

Render the children to include the routes.

```jsx
<ProtectedRouteGroup
  redirectChoices={[
    { path: "/welcome", test: false },
    { path: "/wecomess", test: false }
  ]}
  Component={() => <div>test</div>}
>
  <Route path="/welcome" component={Welcome} />
  <Route
    exact
    path={"/setup-market"}
    render={() => <Redirect to={"/setup-market/add-payment"} />}
  />
  <Route exact path="/setup-market/:stage" component={SetupMarketRoutes} />
  <Route exact path="/profile" component={Profile} />
  <Route exact path="/profile/vehicles" component={ProfileVehicles} />
  <Route exact path="/profile/vehicles/add" component={ProfileAddVehicle} />
</ProtectedRouteGroup>
```

or

```js
  <ProtectedRoutes
    redirectChoices={[
      {path: '/welcome', test: false},
      {path: '/wecomess', test: false}
    ]}
    Component{() => <div></div>}
  >
```
