import React from "react";

export const Avatar = ({ username = "", size = 40 }) => {
  return (
    <>
      <img
        width={size}
        height={size}
        alt={`${username} avatar`}
        src={`https://robohash.org/${username?.toLowerCase()}?set=set4`}
      />
    </>
  );
};
