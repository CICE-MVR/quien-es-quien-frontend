import React from "react";
import cn from "classnames";

import styles from "./card.module.css";

export const Card = ({ children, className }) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
};
