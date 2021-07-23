import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";

import { Avatar } from "../../../../core/components/avatar/avatar";
import { hostName } from "../../../../utils/api/config";
import { GuessModal } from "../../../game/components/guessModal/guess-modal";
import { InviteModal } from "../../../hall/componentes/inviteModal/invite-modal";
import { RejectedModal } from "../../../hall/componentes/rejectedModal/rejected-modal";
import { ResponseModal } from "../../../hall/componentes/responseModal/response-modal";
import { OnlinePlayers } from "../onlinePlayers/online-players";

import styles from "./chat.module.css";
import { Card } from "../../../../core/components/card/card";
import { Rules } from "../../../../core/components/rules/rules";

export const Chat = ({
  myUsername = "anon",
  room = "hall",
  mode = "hall",
  characterId,
  cards = [],
  className = "",
}) => {
  const socket = useRef();
  let history = useHistory();

  const [inputValue, setInputValue] = useState("");
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [showGuessModal, setShowGuessModal] = useState(false);

  const [senderInfo, setSenderInfo] = useState(null);
  const [recipientInfo, setRecipientInfo] = useState(null);

  const onAvatarPress = (recipient) => {
    if (mode === "hall") {
      setRecipientInfo(recipient);
      setShowInviteModal(true);
    }
  };

  const onModalClose = () => {
    setShowInviteModal(false);
    setShowResponseModal(false);
    setShowRejectedModal(false);
    setShowGuessModal(false);
  };

  const onGuess = (cardId) => {
    socket.current.emit("make-guess", {
      guess: cardId,
      username: myUsername,
      room,
    });
  };

  const onWantToGuess = () => {
    setShowGuessModal(true);
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
      setOnlinePeople((op) => ({ ...op, [socketId]: username }));
    });
    socket.current.on("wave", ({ socketId, username }) => {
      setOnlinePeople((op) => ({ ...op, [socketId]: username }));
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
    socket.current.on("make-guess", ({ guess }) => {
      if (guess === characterId) {
        socket.current.emit("correct-guess", { room });
        history.push("/gameover");
      } else {
        socket.current.emit("wrong-guess", { room });
        history.push("/victory");
      }
    });
    socket.current.on("correct-guess", () => {
      history.push("/victory");
    });
    socket.current.on("wrong-guess", () => {
      history.push("/gameover");
    });

    socket.current.emit("join-room", { username: myUsername, room });

    return () => {
      socket.current.removeAllListeners();
      socket.current.disconnect();
    };
  }, [characterId, history, myUsername, room, socket]);

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

  return (
    <>
      <div className={styles.container}>
        {mode !== "hall" && (
          <Card className={styles.card}>
            <p className="boldText">¿Ya descubriste la carta de tu oponente?</p>
            <button className="button" onClick={onWantToGuess}>
              Arriesgar
            </button>
          </Card>
        )}
        {mode !== "game" && <Rules />}
        <div className={className}>
          <div className={styles.chatContainer}>
            {/* comienza el chat */}
            <div className={styles.chat}>
              <div className={styles.divScroll} id="scroll">
                {chatHistory.map((chat, index) => (
                  <div key={index}>
                    <Avatar username={chat.username} size={20} />
                    <span className="boldText">{chat.username}: </span>
                    <span>{chat.message}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={onPostMessage} className={styles.form}>
                <input
                  className="input"
                  placeholder="Escriba aqui..."
                  onChange={onInputChange}
                  value={inputValue}
                />
                <button className="button" onClick={onPostMessage}>
                  Enviar
                </button>
              </form>
            </div>
            {/* termina el chat */}
            {mode !== "game" && (
              <OnlinePlayers
                players={onlinePeopleArray}
                onAvatarPress={onAvatarPress}
              />
            )}
          </div>
        </div>
      </div>
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
      <GuessModal
        cards={cards}
        visible={showGuessModal}
        onClose={onModalClose}
        onGuess={onGuess}
      />
    </>
  );
};
