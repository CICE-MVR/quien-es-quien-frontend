import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../../../core/components/avatar/avatar";
import { Card } from "../../../../core/components/card/card";
// import { NavBar } from "../../../../core/components/nav-bar/nav-bar";
import { useAuth } from "../../../../core/hooks/useAuth";
import { Board } from "../../../board/ui/board/board";
import { Chat } from "../../../chat/ui/chat/chat";
import styles from "./game.module.css";

const cardSeeds = "q8ertuopasdfgjklzxñcv234567".split("");

const createDeck = () => {
  return cardSeeds.map((seed) => ({ seed, turned: false }));
};

const getCharacter = () => {
  const rnd = Math.round(Math.random() * 100);
  return rnd % cardSeeds.length;
};

export const Game = () => {
  const { user } = useAuth();
  const { gameId } = useParams();
  const [cards, setCards] = useState(createDeck());
  const [character, setCharacter] = useState();

  const onCardClicked = (seed) => {
    setCards((cards) =>
      cards.map((card) => {
        if (card.seed === seed) {
          return { ...card, turned: !card.turned };
        }
        return card;
      })
    );
  };

  useEffect(() => {
    // I'll assign a character to the user for this game and save it on localStorage
    // in case of reload, the character is read from localStorage
    let characterId = localStorage.getItem(gameId);
    if (!characterId) {
      characterId = cards[getCharacter()]?.seed;
      localStorage.setItem(gameId, characterId);
    }
    setCharacter(characterId);
  }, [cards, gameId]);

  return (
    <>
      {/* <NavBar title={`Este es tu juego! Vamos a adivinar ${user.username}!`} signout={signout} user={user.username} /> */}
      <div className={styles.gameContainer}>
        <Board cards={cards} onCardClicked={onCardClicked} cardSizes={90} />
        <div className={styles.chatContainer}>
          <Chat
            myUsername={user.username}
            room={gameId}
            mode={"game"}
            cards={cards}
            characterId={character}
            className={styles.chat}
          />
          <Card>
            <p className="boldText">Esta es tu carta:</p>
            <Avatar username={character} size={180} />
          </Card>
        </div>
      </div>
    </>
  );
};
