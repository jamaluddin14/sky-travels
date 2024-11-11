import { useState } from "react";
import CustomButton from "./Button";
import CustomTextField from "./TextField";
import { Button, Divider, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ padding: "3.5rem", paddingRight: "5rem" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h1"
          align="center"
          color="primary"
          style={{ fontWeight: "bold" }}
        >
          Welcome
        </Typography>
        <Typography variant="body1" align="center" color="textPrimary">
          Login to your account
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTextField
                label="Email"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="right">
                Forgot password?
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CustomButton type="submit" style={{ width: "50%" }}>
                Login
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Divider>OR</Divider>
      </Grid>

      <Grid item xs={12} container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="outlined" style={{ backgroundColor: "transparent" }}>
            <FacebookIcon style={{ color: "#3b5998" }} />
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" style={{ backgroundColor: "transparent" }}>
            <GoogleIcon style={{ color: "#db4437" }} />
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" style={{ backgroundColor: "transparent" }}>
            <TwitterIcon style={{ color: "#1da1f2" }} />
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" align="center">
          Don't have an account? Register
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
