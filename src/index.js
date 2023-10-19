import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAik0r72xea0zc0KeySCPWfqXl80cWUcvw",

  authDomain: "chatuiapp-88a9a.firebaseapp.com",

  projectId: "chatuiapp-88a9a",

  storageBucket: "chatuiapp-88a9a.appspot.com",

  messagingSenderId: "844281105304",

  appId: "1:844281105304:web:556c1a6c3a7092d09c79ed"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>
);


//https://chatuiapp-88a9a.web.app/