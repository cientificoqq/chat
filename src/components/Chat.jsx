import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Импорты Firebase SDK для Firestore
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const Chat = () => {
  const { auth } = useContext(Context); // Получаем auth из контекста
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  // Получаем Firestore
  const firestore = getFirestore();

  // Ссылка на коллекцию сообщений
  const messagesRef = collection(firestore, "messages");

  // Запрос для получения сообщений, отсортированных по времени
  const q = query(messagesRef, orderBy("createdAt"));

  // Хук для получения данных
  const [messages, loading] = useCollectionData(q);

  const sendMessage = async () => {
    if (value.trim()) {
      await addDoc(messagesRef, {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(), // Используем серверное время
      });
      setValue(""); // Очищаем поле ввода после отправки
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid
        container
        sx={{ height: window.innerHeight - 50, marginTop: "20px" }}
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "1px solid black"
                    : "1px solid gray",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>

        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          sx={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rows={4}
            maxRows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button onClick={sendMessage} variant={"outlined"}>
            Відправити
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
