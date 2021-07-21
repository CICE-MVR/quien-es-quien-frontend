import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LoginForm } from "../../components/login-form/login-form";
import { useAuth } from "../../../../core/hooks/useAuth";

import styles from "./login.module.css";

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
    <div className={styles.container}>
      <div>
        <img src="./png/unicornLogin.png" alt="logo" width={130} />
      </div>
      <p className="title boldText">yey! Ya puedes comenzar a jugar ;)</p>
      <LoginForm onClick={login} />
      {error && <p>{error}</p>}
      <p className="title boldText colorPrimary">y a divertirse!</p>
      <Link className="link subtitle lightText" to="/register">
        ... o haz click aquí para crear una cuenta nueva y poder ingresar.
      </Link>
    </div>
  );
};
