import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Modal } from "../../../../core/components/modal/modal";
import styles from "./rejected-modal.module.css";

export const RejectedModal = ({ sender, visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div>
        <Avatar username={sender} />
        <p>{sender} No puede jugar contigo en este momento</p>
        <div className={styles.buttonContainer}>
          <button className="button" onClick={onClose}>
            cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};
