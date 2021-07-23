import React from "react";
import styles from "./rules.module.css";

export const Rules = () => {
  return (
    <>
      <div className={styles.rulesContainer}>
        <div className={styles.rules}>
          <p className="colorTertiary boldText">Reglas del juego:</p>
          <p className="colorTertiary">
            Cada jugador recibe un{" "}
            <strong className="colorPrimary boldText">gato misterioso</strong> y
            a través de preguntas de sí o no, trata de adivinar el{" "}
            <strong className="colorPrimary boldText">gato misterioso</strong>{" "}
            del otro jugador.
          </p>
          <p className="colorTertiary">
            Cuando creas saber quién es el{" "}
            <strong className="colorPrimary boldText">gato misterioso</strong>{" "}
            de tu oponente, puedes adivinar con el botón de "Arriesgar". Si te
            equivocas, ¡pierdes la partida!
          </p>
        </div>
      </div>
    </>
  );
};
