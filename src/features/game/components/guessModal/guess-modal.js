import React from "react";
import { Modal } from "../../../../core/components/modal/modal";
import { Board } from "../../../board/ui/board/board";
import styles from "./guess-modal.module.css";

export const GuessModal = ({ cards = [], visible, onClose, onGuess }) => {
  return (
    <Modal
      className={styles.modalContainer}
      visible={visible}
      onClose={onClose}>
      <div>
        <Board
          cards={cards}
          cardSizes={50}
          onCardClicked={onGuess}
          showTurned={false}
        />
        <p>Si estas listo para arriesgar, haz click en una carta!</p>
        <p>
          Si aciertas ganaras la partida, de lo contrario tu contrincante ganara
        </p>
        <div>
          <button className="button" onClick={onClose}>
            cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};
