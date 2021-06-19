import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../../../core/hooks/useAuth";
import { RegisterForm } from "../../components/register-form/register-form";

export const Register = () => {
  const { signup, user } = useAuth();
  const [error, setError] = useState(false);
  const history = useHistory();

  const register = async (data) => {
    const { success, error } = await signup(data);
    if (success) {
      return history.replace("/login");
    }
    setError(error);
  };

  useEffect(() => {
    if (user) {
      history.replace("/hall");
    }
  }, [user, history]);

  return (
    <>
      <h2>Register to create a new account </h2>
      <RegisterForm onClick={register} />
      {error && <p>{error}</p>}
      <Link to="/login">or login</Link>
    </>
  );
};
