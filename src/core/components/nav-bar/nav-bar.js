import React from "react";

export const NavBar = ({ signout }) => {
  return (
    <>
      <div>
        <button onClick={signout}>logout</button>
      </div>
    </>
  );
};
