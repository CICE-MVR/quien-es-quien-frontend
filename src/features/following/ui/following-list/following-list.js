import React from "react";

const example = [{ username: "vero" }, { username: "anon" }];

export const FollowingList = ({ users = example }) => {
  return (
    <>
      <div>
        {users.map((user) => (
          <div>
            <img src={"https://robohash.org/" + user.username} />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </>
  );
};
