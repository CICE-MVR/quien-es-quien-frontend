import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./victory.module.css";

export const Victory = () => {
  const history = useHistory();
  const onBackToHall = () => {
    history.push("/hall");
  };
  return (
    <>
      {/* <NavBar title={`Este es tu juego! Vamos a adivinar ${user.username}!`} signout={signout} user={user.username} /> */}
      <div className={styles.gameContainer}>
        Grande campeon! sos el maquina!
        <button onClick={onBackToHall}>volve al hall</button>
      </div>
    </>
  );
};
