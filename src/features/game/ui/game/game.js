import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../core/hooks/useAuth";
import { Chat } from "../../../chat/ui/chat/chat";

export const Game = () => {
  const { user } = useAuth();
  let { gameId } = useParams();

  return (
    <>
      Hola, este es el juago {user.username}
      <Chat myUsername={user.username} room={gameId} />
    </>
  );
};
