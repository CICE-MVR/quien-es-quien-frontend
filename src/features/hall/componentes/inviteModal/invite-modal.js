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
        <Avatar username={recipient} />
        <p>Quieres invitar a {recipient} a jugar?</p>
        <div>
          <button onClick={onClick}>Invitar a jugar</button>
        </div>
      </div>
    </Modal>
  );
};
