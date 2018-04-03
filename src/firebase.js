import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDPQeJK6Js0dRt6zsKEAinuaJOQNIcBSf8",
  authDomain: "bancoestado-5cb49.firebaseapp.com",
  databaseURL: "https://bancoestado-5cb49.firebaseio.com",
  projectId: "bancoestado-5cb49",
  storageBucket: "",
  messagingSenderId: "1015087644075"
};
firebase.initializeApp(config);


export default firebase;