import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";
import styles from "./board.module.css";

export const Board = ({
  cards,
  cardSizes = 100,
  onCardClicked,
  showTurned = true,
}) => {
  const filteredCards = showTurned
    ? cards
    : cards.filter((card) => !card.turned);
  return (
    <>
      <div className={styles.boardContainer}>
        {filteredCards.map((card) => {
          const onClick = () => onCardClicked(card.seed);
          return (
            <div key={card.seed} onClick={onClick}>
              {card.turned ? (
                <img
                  width={cardSizes}
                  height={cardSizes}
                  alt="turned"
                  src="http://www.adammarcus.com/wp/wp-content/uploads/2013/10/image001.jpg"
                />
              ) : (
                <div className={styles.myCard}>
                  <Avatar username={card.seed} size={cardSizes} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
