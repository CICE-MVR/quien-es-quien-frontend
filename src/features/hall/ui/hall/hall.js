import React from "react";
import { Chat } from "../../../chat/ui/chat/chat";
import { NavBar } from "../../../../core/components/nav-bar/nav-bar";
import { useAuth } from "../../../../core/hooks/useAuth";
import { FollowingList } from "../../../following/ui/following-list/following-list";

export const Hall = () => {
  const { user, signout } = useAuth();

  const following = []; //[{ username: "vero" }, { username: "anon" }];

  return (
    <>
      <NavBar signout={signout} />
      Hola, estas logueado {user.username}
      <Chat myUsername={user.username} room={"hall"} />
      <FollowingList users={following} />
    </>
  );
};
