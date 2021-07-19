import React from "react";
import { Modal } from "../../../../core/components/modal/Modal";
import { Board } from "../../../board/ui/board/board";

export const GuessModal = ({ cards = [], visible, onClose, onGuess }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div>
        <Board
          cards={cards}
          cardSizes={40}
          onCardClicked={onGuess}
          showTurned={false}
        />
        <p>Si estas listo para arriesgar, clickea en una carta!</p>
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
