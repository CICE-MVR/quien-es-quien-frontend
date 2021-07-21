import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../../../core/hooks/useAuth";
import { RegisterForm } from "../../components/register-form/register-form";

import styles from "./register.module.css";

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
    <div className={styles.container}>
      <div>
        <img src="./png/unicornregister.png" alt="logo" width={130} />
      </div>
      <p className="title boldText">Registrate para obtener tu cuenta! </p>
      <RegisterForm onClick={register} />
      {error && <p>{error}</p>}
      <p className="title boldText colorPrimary">
        Hay muchos amigos esperandote!
      </p>
      <Link className="link subtitle lightText" to="/login">
        Ahora ya puedes loguearte
      </Link>
    </div>
  );
};
