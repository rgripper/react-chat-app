import React from "react";
import { ChatDataSource } from "meetup-chat-client-react-component";
import { renderChatContent } from "./renderChatContent";
import "./styles.css";

export const App = () => (
  <div className="app">
    <ChatDataSource
      serverUrl="https://serene-basin-84996.herokuapp.com"
      userName="Telephant"
      render={renderChatContent}
    />
  </div>
);
