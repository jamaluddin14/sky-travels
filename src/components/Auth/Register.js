import CustomTextField from "./TextField";
import CustomButton from "./Button";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
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
          variant="h3"
          align="left"
          color="primary"
          style={{ fontWeight: "bold" }}
        >
          Create an account
        </Typography>
        <Typography variant="body1" align="left" color="textPrimary">
          By creating an account, you agree to our Terms of Service and Privacy
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CustomTextField
                    label="First Name"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    label="Last Name"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
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
              <CustomTextField
                label="Confirm Password"
                type="password"
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton type="submit" fullWidth>
                Register
              </CustomButton>
            </Grid>
          </Grid>
        </form>
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
    </Grid>
  );
};

export default Register;
