import React, { useState } from "react";
import { Chat } from "../../../chat/ui/chat/chat";
import { NavBar } from "../../../../core/components/nav-bar/nav-bar";
import { useAuth } from "../../../../core/hooks/useAuth";
import { FollowingList } from "../../../following/ui/following-list/following-list";
import { InviteModal } from "../../componentes/inviteModal/invite-modal";
import { ResponseModal } from "../../componentes/responseModal/response-modal";
// import { useHistory } from "react-router-dom";

export const Hall = () => {
  const { user, signout } = useAuth();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(true);

  // let history = useHistory();

  const onModalclose = () => {
    setShowInviteModal(false);
    setShowResponseModal(false);
  };

  const onInviteToPlay = () => {};

  const onAcceptInvite = () => {};

  const onRejectInvite = () => {};

  const following = []; //[{ username: "vero" }, { username: "anon" }];

  return (
    <>
      <NavBar signout={signout} />
      Hola, estas logueado {user.username}
      <Chat myUsername={user.username} room={"hall"} />
      <FollowingList users={following} />
      <InviteModal
        recipient={user.username}
        visible={showInviteModal}
        onClose={onModalclose}
        onInviteToPlay={onInviteToPlay}
      />
      <ResponseModal
        sender={user.username}
        visible={showResponseModal}
        onClose={onModalclose}
        onAccept={onAcceptInvite}
        onReject={onRejectInvite}
      />
    </>
  );
};
