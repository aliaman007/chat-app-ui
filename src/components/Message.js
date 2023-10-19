// src/components/Message.js
import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <strong>{message.sender}</strong>: {message.text}
    </div>
  );
};

export default Message;
