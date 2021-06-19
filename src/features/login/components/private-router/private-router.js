import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../../../../core/hooks/useAuth";

// From https://reactrouter.com/web/example/auth-workflow

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
