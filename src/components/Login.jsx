import { Box, Button, Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase/compat/app"; // ✅ правильный импорт
import "firebase/compat/auth"; // ✅ нужен для auth

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box
            p={5}
            sx={{
              maxWidth: "400px",
              width: "100%",
              backgroundColor: "lightgray",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <Button onClick={login} variant="outlined" color="primary">
              Вхід через Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
