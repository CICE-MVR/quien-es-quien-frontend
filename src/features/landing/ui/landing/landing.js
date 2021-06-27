import React from "react";
import { useHistory } from "react-router-dom";

import cn from "classnames";
import styles from "./landing.module.css";

export const Landing = () => {
  const history = useHistory();

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
