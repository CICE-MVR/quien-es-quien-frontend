import React from "react";
import { Avatar } from "../../../../core/components/avatar/avatar";

const example = [{ username: "vero" }, { username: "anon" }];

export const FollowingList = ({ users = example }) => {
  return (
    <>
      <div>
        {users.map(({ username }) => (
          <div key={username}>
            <Avatar username={username} size={50} />
            <p>{username}</p>
          </div>
        ))}
      </div>
    </>
  );
};
