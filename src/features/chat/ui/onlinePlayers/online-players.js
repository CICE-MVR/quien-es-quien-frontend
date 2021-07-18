import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
export const OnlinePlayers = ({ players }) => {
  return (
    <div>
      {players.map((entry) => {
        const [socketId, username] = entry;
        return (
          <span key={socketId}>
            <Avatar username={username} />
          </span>
        );
      })}
    </div>
  );
};
