import React from "react";
import { useAuth } from "../../../login/hooks/useAuth";

export const Hall = () => {
  const { user } = useAuth();
  console.log(user);
  return <>Hola, estas logueado {user.username}</>;
};
