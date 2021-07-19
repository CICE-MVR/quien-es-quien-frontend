import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Modal } from "../../../../core/components/modal/Modal";
import styles from "./response-modal.module.css";
import cn from "classnames";

export const ResponseModal = ({
  sender,
  visible,
  onClose,
  onAccept,
  onReject,
}) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div>
        <Avatar username={sender} size={60} />
        <p>
          <strong>{sender}</strong> te invita a jugar
        </p>
        <div className={styles.btnGroup}>
          <button className={cn("button", styles.button)} onClick={onReject}>
            Rechazar
          </button>
          <button className={cn("button", styles.button)} onClick={onAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};
