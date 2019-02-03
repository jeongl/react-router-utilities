# react-router-utilities

```js
  <ProtectedRoutes
    redirectChoices={[
      {path: '/welcome', test: false},
      {path: '/wecomess', test: false}
    ]}
  >
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
