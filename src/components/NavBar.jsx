import React, { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "./util/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify={"flex-start"}>
            {user ? (
              <Button
                onClick={() => auth.signOut()}
                variant={"outlined"}
                color="whate"
              >
                Вийти
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outlined"} color="whate">
                  Логін
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
