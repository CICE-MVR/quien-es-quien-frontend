import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginForm } from "../../components/login-form/login-form";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { signin, user } = useAuth();
  const [error, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const login = async (data) => {
    const { success, error } = await signin(data);
    if (success) {
      return history.replace(from);
    }
    setError(error);
  };

  useEffect(() => {
    if (user) {
      history.replace(from);
    }
  }, [user, from, history]);

  return (
    <>
      <LoginForm onClick={login} />
      {error && <p>{error}</p>}
    </>
  );
};
