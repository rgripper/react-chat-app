import React, { Fragment } from "react";
import { Greeter } from "./Greeter";
import { UserList } from "./UserList";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";

export const renderChatContent = (clientState, sendText) => (
  <Fragment>
    {!clientState.chat.isAuthenticated && <div>Not authenticated yet.</div>}
    {clientState.chat.isAuthenticated && (
      <Fragment>
        <Greeter
          name={
            clientState.chat.users.find(
              x => x.id === clientState.chat.currentUserId
            ).name
          }
        />
        <div className="chat-content">
          <UserList users={clientState.chat.users} />
          <MessageList
            messages={clientState.chat.messages}
            users={clientState.chat.users}
          />
        </div>
        <MessageForm onSendText={sendText} />
      </Fragment>
    )}
    <div className="debug">{JSON.stringify(clientState)}</div>
  </Fragment>
);
