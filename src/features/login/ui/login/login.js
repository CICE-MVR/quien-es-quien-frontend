import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LoginForm } from "../../components/login-form/login-form";
import { useAuth } from "../../../../core/hooks/useAuth";

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
      <h2>Login</h2>
      <LoginForm onClick={login} />
      {error && <p>{error}</p>}
      <Link to="/register">or create a new account</Link>
    </>
  );
};
