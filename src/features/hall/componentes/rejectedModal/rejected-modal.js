import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Modal } from "../../../../core/components/modal/Modal";

export const RejectedModal = ({ sender, visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div>
        <Avatar username={sender} />
        <p>{sender} No puede jugar contigo en este momento</p>
        <div>
          <button onClick={onClose}>cerrar</button>
        </div>
      </div>
    </Modal>
  );
};
