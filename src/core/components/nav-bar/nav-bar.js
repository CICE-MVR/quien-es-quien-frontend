import React from "react";
import { Avatar } from "../avatar/avatar";
import styles from "./nav-bar.module.css";

export const NavBar = ({ signout, user }) => {
  return (
    <nav className={styles.navBar}>
      <Avatar username={user} size={60} />
      <p className="colorWhite boldText">
        ¡Hola, {user}! Llegaste justo a tiempo...¿con quién vas a jugar hoy?
      </p>

      <button className="button lightText" onClick={signout}>
        Desconectarme
      </button>
    </nav>
  );
};
