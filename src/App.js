import React from "react";
import Config from "./components/chatbot/Config";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Styles.css";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={Config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
