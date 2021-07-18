import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";

export const Board = ({
  cards,
  cardSizes = 80,
  onCardClicked,
  showTurned = true,
}) => {
  const filteredCards = showTurned
    ? cards
    : cards.filter((card) => !card.turned);
  return (
    <>
      <div>
        {filteredCards.map((card) => {
          const onClick = () => onCardClicked(card.seed);
          return (
            <span key={card.seed} onClick={onClick}>
              {card.turned ? (
                <img
                  width={cardSizes}
                  height={cardSizes}
                  alt="turned"
                  src="http://www.adammarcus.com/wp/wp-content/uploads/2013/10/image001.jpg"
                />
              ) : (
                <Avatar username={card.seed} size={cardSizes} />
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
