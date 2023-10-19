// // components/ConversationList.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import { getConversations } from '../services/api';
import data from "../data.json";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";

const ConversationList = ({chatLists}) => {
  console.log()

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {chatLists.map((converasation) => {
        // <React.Fragment  key={converasation.id}>
        return (
          <div key={converasation.id}>
            <ListItem alignItems="flex-start">
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
  );
};
export default ConversationList;
