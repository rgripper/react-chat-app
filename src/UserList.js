import React from "react";

export const UserList = props => (
  <ul className="user-list">
    {props.users.map(x => (
      <li key={x.id} className={x.isConnected ? "" : "disconnected"}>
        <img src={x.avatarUrl} alt="" /> {x.name}
      </li>
    ))}
  </ul>
);
