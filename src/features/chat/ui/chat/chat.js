import React from "react";

export const Chat = ({ chatHistory = [], onPostMessage }) => {
  return (
    <>
      <div>
        {chatHistory.map((chat) => (
          <div>
            <span>{chat.username}:</span>
            <span>{chat.message}</span>
          </div>
        ))}
      </div>
      <input placeholder="Escriba aqui" />
      <button onClick={onPostMessage}>Enviar</button>
    </>
  );
};
