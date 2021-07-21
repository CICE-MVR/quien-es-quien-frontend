import React from "react";
import className from "classnames";

import styles from "./modal.module.css";

export const Modal = ({ onClose, visible, children }) => {
  const backdropClass = className({
    [styles.backdrop]: true,
    [styles.backdropVisible]: visible,
  });

  return (
    <>
      <div onClick={onClose} className={backdropClass}>
        <div className={styles.card}>
          <svg
            className={styles.close}
            onClick={onClose}
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="19.3433"
              y1="0.363507"
              x2="1.34331"
              y2="17.3635"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="24.7588"
              y2="-0.5"
              transform="matrix(0.727013 0.686624 0.686624 -0.727013 1 0)"
              stroke="black"
            />
          </svg>
          {children}
        </div>
      </div>
    </>
  );
};
