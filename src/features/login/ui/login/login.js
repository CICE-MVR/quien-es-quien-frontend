import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginForm } from "../../components/login-form/login-form";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { signin } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const login = async (data) => {
    console.log(data);
    const success = await signin(data);
    if (success) {
      history.replace(from);
    }
  };

  return (
    <>
      <LoginForm onClick={login} />
    </>
  );
};
