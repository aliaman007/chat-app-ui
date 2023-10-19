// components/ChatBox.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { red } from "@mui/material/colors";

const ChatBox = ({ chat }) => {
  console.log("chatBox", chat);
  // const { id } = useParams();
  const [textmessage, setTextMessages] = useState([]);

  // useEffect(() => {
  //   setMessages(chat.message);
  // }, [id]);
const handleClick=()=>{
  setTextMessages(textmessage);
}
const handleChange = event => {
  setTextMessages(event.target.value);

  console.log('value is:', event.target.value);
};
  return (
    <div>
      <h2>Chat with {chat.sender}</h2>
      <div style={{
        position:"relative",display:"inline-block"
      }}>
        {chat.message.map((message) => (
          <div style={
            {left:0}
          }key={message.id}>{message.text}</div>
        ))}
        <div
          style={{
            width: 100,
            height: 20,
            position:"relative",
            right:0
          }}
        >
          <p
            style={{
              textDecorationColor: red,
            }}
          >
            You
          </p>
          <p>{chat.lastmsg}</p>{" "}
          <p>{textmessage}</p>
        </div>

        {/* {data.messages} */}
      </div>
      <div style={{
        position:"fixed",
        bottom:400
      }}>
        <button onClick={handleClick}>Send</button>
        <input type="text" value={textmessage}
         onChange={handleChange}/>
      </div>
    </div>
  );
};

export default ChatBox;
