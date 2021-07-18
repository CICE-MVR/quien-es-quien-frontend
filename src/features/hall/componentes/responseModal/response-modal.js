import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Modal } from "../../../../core/components/modal/Modal";

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
        <Avatar username={sender} />
        <p>{sender} te invita a jugar</p>
        <div>
          <button onClick={onAccept}>Rechazar</button>
          <button onClick={onReject}>Aceptar</button>
        </div>
      </div>
    </Modal>
  );
};
