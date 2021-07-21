import React from "react";
import { Avatar } from "../avatar/avatar";
import styles from "./nav-bar.module.css";

export const NavBar = ({ title, signout, user }) => {
  return (
    <nav className={styles.navBar}>
      <Avatar username={user} size={60} />
      <p className="colorWhite boldText">{title}</p>

      <button className="button lightText" onClick={signout}>
        Desconectarme
      </button>
    </nav>
  );
};
