// src/App.js
import React, { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';
import SearchBox from './components/SearchBox';
import ConversationList from './components/ConversationList';
import ChatContainer from './components/Conversaation';
import { Routes, Route } from "react-router-dom";
function App  () {
  // const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   // Fetch data from API
  //   fetch('https://api.example.com/messages')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessages(data);
  //       setFilteredMessages(data);
  //     })
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  // const handleSearch = (term) => {
  //   setSearchTerm(term);
  //   // Filter messages based on the search term
  //   const filtered = messages.filter((message) =>
  //     message.sender.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setFilteredMessages(filtered);
  // };

  return (
    <div>
       <Routes>
        <Route exact path="/" Component={ ChatContainer} />
        <Route exact path="/chats" Component={ChatBox}/>
      </Routes>
    </div>
  );
};

export default App;
