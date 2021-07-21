import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./defeat.module.css";

export const Defeat = () => {
  const history = useHistory();
  const onBackToHall = () => {
    history.push("/hall");
  };

  return (
    <>
      {/* <NavBar title={`Este es tu juego! Vamos a adivinar ${user.username}!`} signout={signout} user={user.username} /> */}
      <div className={styles.gameContainer}>
        Ehh perdite!
        <button onClick={onBackToHall}>volve al hall</button>
      </div>
    </>
  );
};
