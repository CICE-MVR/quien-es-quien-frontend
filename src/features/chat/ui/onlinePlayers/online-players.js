import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
export const OnlinePlayers = ({ players, onAvatarPress }) => {
  return (
    <div>
      {players.map((entry) => {
        const [socketId, username] = entry;
        const onClick = () => onAvatarPress({ socketId, username });
        return (
          <span key={socketId} onClick={onClick}>
            <Avatar username={username} />
          </span>
        );
      })}
    </div>
  );
};
