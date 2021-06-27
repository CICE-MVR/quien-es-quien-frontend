import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import cn from "classnames";
import styles from "./landing.module.css";
import { useAuth } from "../../../../core/hooks/useAuth";

export const Landing = () => {
  const { user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.replace("/hall");
    }
  }, [history, user]);

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <img className={styles.img} src="./png/logo.png" alt="logo" />
          <h1 className="bigTitle">¿Quién Es Quién?</h1>
        </div>
        <div className={styles.buttonGroup}>
          <button className={cn("button", styles.btn)} onClick={handleLogin}>
            Entrar
          </button>
          <button className={cn("button", styles.btn)} onClick={handleRegister}>
            Registrarme
          </button>
        </div>
      </div>
    </>
  );
};
