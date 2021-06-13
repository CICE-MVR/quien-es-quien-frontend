// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import { loginURL } from "../../../utils/api/routes";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async ({ email, password }) => {
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const { err } = await response.json();
      return { error: err };
    }
    const { user, token } = await response.json();
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    return { success: user };

    // return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };
  const signup = (_email, _password) => {
    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };
  const signout = () => {
    localStorage.clear();
    setUser(false);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (!user && userString) {
      const loggedUser = JSON.parse(userString);
      setUser(loggedUser);
    }
  }, [user]);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
  };
}
