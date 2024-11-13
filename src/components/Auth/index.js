import React from "react";
import { useParams } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { Container, Grid } from "@mui/material";
import Navbar from "../Navbar";
import AuthNavigation from "./Navigation";

const Auth = () => {
  const { type } = useParams(); // get the type parameter from URL
  const auth = type === "login" || type === "register" ? type : "login"; // default to login if type is invalid

  return (
    <>
      <Grid item xs={12} md={6}>
        <Navbar>
          <AuthNavigation auth={auth} />
        </Navbar>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Container>
            <img src="login-page.png" alt="Sky Travels" />
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          {auth === "login" ? <Login /> : <Register />}
        </Grid>
      </Grid>
    </>
  );
};

export default Auth;
