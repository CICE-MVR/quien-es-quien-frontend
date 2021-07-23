import React from "react";
import styles from "./rules.module.css";

export const Rules = () => {
  return (
    <>
      <div className={styles.rulesContainer}>
        <div className={styles.rules}>
          <p className="colorTertiary boldText">Reglas del juego:</p>
          <p className="colorTertiary boldText">
            Cada jugador recibe un{" "}
            <strong className="colorPrimary boldText">gato misterioso </strong>{" "}
            y a través de preguntas de sí o no, trata de adivinar el{" "}
            <strong className="colorPrimary boldText">gato misterioso </strong>{" "}
            del otro jugador.
          </p>
          <p className="colorTertiary boldText">
            Cuando creas saber quién es el{" "}
            <strong className="colorPrimary boldText">gato misterioso </strong>{" "}
            de tu oponente, puedes adivinar con el botón de "Arriesgar".
          </p>
          <p className="colorTertiary boldText">
            Si te equivocas, ¡pierdes la partida!
          </p>
          <p className="colorTertiary boldText">
            ¿Listo para jugar? Invita a un amigo haciendo click en su Avatar
          </p>
        </div>
      </div>
    </>
  );
};
