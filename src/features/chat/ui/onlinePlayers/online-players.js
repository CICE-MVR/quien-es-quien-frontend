import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import styles from "./online-players.module.css";

export const OnlinePlayers = ({ players = [], onAvatarPress }) => {
  return (
    <>
      <div className={styles.onlineList}>
        {players.length !== 0 ? (
          <p className="colorTertiary boldText">Tus Amigos Conectados:</p>
        ) : (
          <p className="colorTertiary boldText">
            Todavía no ha llegado nadie! Invitalos!
          </p>
        )}
        <div className={styles.avatarContainer}>
          {players.map((entry) => {
            const [socketId, username] = entry;
            const onClick = () => onAvatarPress({ socketId, username });
            return (
              <div className={styles.avatar} key={socketId} onClick={onClick}>
                <Avatar username={username} size={60} />
                <div>{username}</div>
              </div>
            );
          })}
        </div>
        <p className="colorTertiary boldText">
          ¡Haz click para invitarlos a jugar!
        </p>
      </div>
    </>
  );
};
