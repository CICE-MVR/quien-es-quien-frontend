import React from "react";
import { useAuth } from "../../../../core/hooks/useAuth";

export const Game = () => {
  const { user } = useAuth();
  return <>Hola, este es el juago {user.username}</>;
};
