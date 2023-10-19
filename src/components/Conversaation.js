import { CAvatar } from '@coreui/react'
import ConversationList from './ConversationList';
import ChatBox from './ChatBox';
import { useEffect,useState } from 'react';
import data from '../data.json';
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ChatContainer = () => {
    const [selectedChat, setSelectedChat] = useState(data[0]);
const [chatList, setChatList] = useState([]);
const [searchQuery, setSearchQuery] = useState('')
const [contact,setContact]=useState(data[0].sender);
    useEffect(() => {
        console.log('data here',data);
        console.log(searchQuery)
        if(searchQuery===''){
            console.log('inside loop',data)
            setChatList(data);
            return;
        }
        const filteredChat = data.filter((chat)=>chat.sender.toLowerCase().includes(searchQuery.toLowerCase()));
        setChatList(filteredChat)
       
    }, [searchQuery]);
    const handleChatSelection = (chat) => {
        console.log('handlechat',chat);
        setSelectedChat(chat);
    };
   const handleChange=(contact)=>{
    data.map((c)=>{
        console.log('new chat',c+''+contact);
        if(c.sender===contact.target.value){
            setSelectedChat(c);
        }
    })
   }
return (
    
    <div
    style={{
        width:700,
        height:500,
        left:400,
        top:150,
        borderWidth:4,
        borderColor:'black',
        borderStyle:'solid',
        position:'fixed',
        display:'inline-block'
        
    }}>
        <div>
        <label for="contacts">New Chat</label> 
    <select name="contacts" id="contacts"
    onSelect={handleChange}>
    {/* {data.map((contact)=>{      
        console.log('contact',contact.sender); */}
                <option value={data[0].sender}>{data[0].sender}</option>
                <option value={data[1].sender}>{data[1].sender}</option>
                <option value={data[2].sender}>{data[2].sender}</option>
                <option value={data[3].sender}>{data[3].sender}</option>
                <option value={data[4].sender}>{data[4].sender}</option> 
             {/* })}   */}
       
    </select>
  

            
       
       
</div>
        {/* <h3 style={{color: 'black'}}>Chats</h3> */}

<div>
    <form>
        <input style={{width: 205, borderRadius:5, marginBottom:10}} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        type='text'
        value={searchQuery}
        placeholder='Search in chats...'
        />
    </form>
    
</div>

       <div style={{
position:'relative',
left:0,
display:'inline-block',
verticalAlign: 'middle'
       }}>
        {/* <ConversationList chatLists={chatList}/> */}
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {chatList.map((converasation) => {
        // <React.Fragment  key={converasation.id}>
        return (
          <div key={converasation.id}>
            <ListItem alignItems="flex-start"
           >
                <button  onClick={() => handleChatSelection(converasation)}>open chat</button>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={converasation.sender}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    > </Typography>
                    {converasation.lastmsg}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
        </div> 
        <div style={{
            position:'relative',
            right:0,display:'inline-block'
        }}>
            <ChatBox chat={selectedChat}
            /></div>
    </div>
)
}
export default ChatContainer;