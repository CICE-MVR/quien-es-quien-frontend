import React from "react";
import { Chat } from "../../../chat/ui/chat/chat";
import { NavBar } from "../../../../core/components/nav-bar/nav-bar";
import { useAuth } from "../../../../core/hooks/useAuth";
import { FollowingList } from "../../../following/ui/following-list/following-list";

import styles from "./hall.module.css";

export const Hall = () => {
  const { user, signout } = useAuth();

  const following = []; //[{ username: "vero" }, { username: "anon" }];

  return (
    <div className={styles.container}>
      <NavBar
        title={`¡Hola, ${user.username}! Llegaste justo a tiempo...¿con quién vas a jugar hoy?`}
        signout={signout}
        user={user.username}
      />
      <div className={styles.chatHall}>
        <FollowingList users={following} />
        <Chat myUsername={user.username} room={"hall"} mode={"hall"} />
      </div>
    </div>
  );
};
