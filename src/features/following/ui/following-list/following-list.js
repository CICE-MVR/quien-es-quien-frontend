import React from "react";

const example = [{ username: "vero" }, { username: "anon" }];

export const FollowingList = ({ users = example }) => {
  return (
    <>
      <div>
        {users.map(({ username }) => (
          <div key={username}>
            <img
              alt={`${username} avatar`}
              src={`https://robohash.org/${username}`}
            />
            <p>{username}</p>
          </div>
        ))}
      </div>
    </>
  );
};
