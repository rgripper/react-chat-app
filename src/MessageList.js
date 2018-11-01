import React from "react";

export const MessageList = props => (
  <ul className="message-list">
    {props.messages
      .sort((a, b) => a.creationDate.localeCompare(b.creationDate))
      .reverse()
      .map(x => (
        <li key={x.id}>
          <img
            src={props.users.find(u => u.id === x.senderId).avatarUrl}
            alt=""
          />
          <span>{x.text}</span>
        </li>
      ))}
  </ul>
);
