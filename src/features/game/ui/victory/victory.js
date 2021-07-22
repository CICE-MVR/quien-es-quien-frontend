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
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="./png/unicornio-festejo.png" alt="logo" width={130} />
        </div>
        <p className="bigTitle">GANASTE ESTE JUEGO</p>
        <p className="bigTitle">¡Grande campeón!</p>
        <button className="button" onClick={onBackToHall}>
          volve al hall
        </button>
      </div>
    </>
  );
};
