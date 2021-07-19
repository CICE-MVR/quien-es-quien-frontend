import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Modal } from "../../../../core/components/modal/Modal";

export const InviteModal = ({
  recipient,
  visible,
  onClose,
  onInviteToPlay,
}) => {
  const onClick = () => {
    onInviteToPlay();
    onClose();
  };
  return (
    <Modal visible={visible} onClose={onClose}>
      <div>
        <Avatar username={recipient} size={60} />
        <p>
          ¿Quieres invitar a <strong>{recipient}</strong> a jugar?
        </p>
        <div>
          <button className="button" onClick={onClick}>
            Si, invitar
          </button>
        </div>
      </div>
    </Modal>
  );
};
