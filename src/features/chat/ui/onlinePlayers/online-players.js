import React from "react";
export const OnlinePlayers = ({ players }) => {
  return (
    <div>
      {players.map((entry) => {
        const [socketId, username] = entry;
        return (
          <span key={socketId}>
            <img
              width="40"
              height="40"
              alt={`${username} avatar`}
              src={`https://robohash.org/${username?.toLowerCase()}?set=set4`}
            />
          </span>
        );
      })}
    </div>
  );
};
