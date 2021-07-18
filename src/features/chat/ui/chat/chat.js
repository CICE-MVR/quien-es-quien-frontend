import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { hostName } from "../../../../utils/api/config";
import { InviteModal } from "../../../hall/componentes/inviteModal/invite-modal";
import { RejectedModal } from "../../../hall/componentes/rejectedModal/rejected-modal";
import { ResponseModal } from "../../../hall/componentes/responseModal/response-modal";
import { OnlinePlayers } from "../onlinePlayers/online-players";

export const Chat = ({ myUsername = "anon", room = "hall" }) => {
  const socket = useRef();
  let history = useHistory();

  const [inputValue, setInputValue] = useState("");
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [senderInfo, setSenderInfo] = useState(null);
  const [recipientInfo, setRecipientInfo] = useState(null);

  const onAvatarPress = (recipient) => {
    setRecipientInfo(recipient);
    setShowInviteModal(true);
  };

  const onModalClose = () => {
    setShowInviteModal(false);
    setShowResponseModal(false);
    setShowRejectedModal(false);
  };

  const onInviteToPlay = () => {
    socket.current.emit("invite-to-play", {
      recipient: recipientInfo.socketId,
      username: myUsername,
    });
    setRecipientInfo(null);
  };

  const onAcceptInvite = () => {
    socket.current.emit("accept-invite", {
      recipient: senderInfo.socketId,
      username: myUsername,
    });
    setSenderInfo(null);
  };

  const onRejectInvite = () => {
    socket.current.emit("reject-invite", {
      recipient: senderInfo.socketId,
      username: myUsername,
    });
    setSenderInfo(null);
  };

  const appendMesageToHistory = (response) => {
    setChatHistory((ch) => [...ch, response]);
  };

  useEffect(() => {
    socket.current = io(hostName);
    socket.current.on("response", (response) =>
      appendMesageToHistory(response)
    );
    socket.current.on("connected", ({ socketId, username }) => {
      socket.current.emit("wave", {
        username: myUsername,
        room,
      });
      if (socketId !== socket.current.id) {
        setOnlinePeople((op) => ({ ...op, [socketId]: username }));
      }
    });
    socket.current.on("wave", ({ socketId, username }) => {
      if (socketId !== socket.current.id) {
        setOnlinePeople((op) => ({ ...op, [socketId]: username }));
      }
    });
    socket.current.on("disconnected", ({ socketId }) => {
      setOnlinePeople((op) => {
        const people = { ...op };
        delete people[socketId];
        return people;
      });
    });
    socket.current.on("invitation", (sender) => {
      setSenderInfo(sender);
      setShowResponseModal(true);
    });
    socket.current.on("invitation-rejected", (sender) => {
      setSenderInfo(sender);
      setShowRejectedModal(true);
    });
    socket.current.on("invitation-accepted", ({ gameId }) => {
      history.push(`/game/${gameId}`);
    });

    socket.current.emit("join-room", { username: myUsername, room });
    return () => {
      socket.current.removeAllListeners();
      socket.current.disconnect();
    };
  }, [myUsername, room, socket]);

  const onInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onPostMessage = (e) => {
    e?.preventDefault();
    const message = inputValue;
    setInputValue("");
    socket.current.emit("message", { room, username: myUsername, message });
    return false;
  };

  const onlinePeopleArray = Object.entries(onlinePeople);
  console.log(onlinePeopleArray);
  return (
    <>
      <OnlinePlayers
        players={onlinePeopleArray}
        onAvatarPress={onAvatarPress}
      />
      {/* comienza el chat */}
      <div>
        <div>
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <Avatar username={chat.username} size={25} />
              <span>{chat.username}:</span>
              <span>{chat.message}</span>
            </div>
          ))}
        </div>
        <form onSubmit={onPostMessage}>
          <input
            placeholder="Escriba aqui"
            onChange={onInputChange}
            value={inputValue}
          />
        </form>
        <button onClick={onPostMessage}>Enviar</button>
      </div>
      {/* termina el chat */}

      <InviteModal
        recipient={recipientInfo?.username}
        visible={showInviteModal}
        onClose={onModalClose}
        onInviteToPlay={onInviteToPlay}
      />
      <ResponseModal
        sender={senderInfo?.username}
        visible={showResponseModal}
        onClose={onModalClose}
        onAccept={onAcceptInvite}
        onReject={onRejectInvite}
      />
      <RejectedModal
        sender={senderInfo?.username}
        visible={showRejectedModal}
        onClose={onModalClose}
      />
    </>
  );
};
