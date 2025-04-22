import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDbnsOOXy6aGPqzCeCCitJz223THU6TAnY",
  authDomain: "chat1-eb784.firebaseapp.com",
  projectId: "chat1-eb784",
  storageBucket: "chat1-eb784.appspot.com",
  messagingSenderId: "295757586367",
  appId: "1:295757586367:web:361f6d6fc0054b7e2fcb0a",
  measurementId: "G-9RYVCET9T8",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>
);
