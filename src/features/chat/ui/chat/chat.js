import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { hostName } from "../../../../utils/api/config";
import { OnlinePlayers } from "../onlinePlayers/online-players";

export const Chat = ({ myUsername = "anon", room = "hall" }) => {
  const socket = useRef();
  const [inputValue, setInputValue] = useState("");
  const [onlinePeople, setOnlinePeople] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  const appendMesageToHistory = (response) => {
    setChatHistory((ch) => [...ch, response]);
  };

  useEffect(() => {
    socket.current = io(hostName);
    socket.current.emit("join-room", { username: myUsername, room });
    socket.current.on("response", (response) =>
      appendMesageToHistory(response)
    );
    socket.current.on("connected", ({ socketId, username }) => {
      socket.current.emit("wave", {
        socketId: socket.current.id,
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

    return () => socket.current.removeAllListeners();
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

  console.log(onlinePeople);
  const onlinePeopleArray = Object.entries(onlinePeople);
  return (
    <>
      <OnlinePlayers players={onlinePeopleArray} />
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <img
              width="25"
              height="25"
              alt={`${chat.username} avatar`}
              src={`https://robohash.org/${chat?.username?.toLowerCase()}?set=set4`}
            />
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
    </>
  );
};
