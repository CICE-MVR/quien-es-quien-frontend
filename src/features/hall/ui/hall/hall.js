import React, { useEffect, useState } from "react";
import { Chat } from "../../../chat/ui/chat/chat";
import { NavBar } from "../../../../core/components/nav-bar/nav-bar";
import { useAuth } from "../../../../core/hooks/useAuth";
import { FollowingList } from "../../../following/ui/following-list/following-list";

export const Hall = () => {
  const { user, signout } = useAuth();
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // me conecto al socket y busco el historial
    setChatHistory([
      { username: "vero", message: "Vamos a jugar!" },
      { username: "Anonimo", message: "Nunca adivinaran quien soy hehehe" },
    ]);
  }, []);

  const following = [{ username: "vero" }, { username: "anon" }];

  console.log(user);
  return (
    <>
      <NavBar signout={signout} />
      Hola, estas logueado {user.username}
      <Chat chatHistory={chatHistory} />
      <FollowingList users={following} />
    </>
  );
};
