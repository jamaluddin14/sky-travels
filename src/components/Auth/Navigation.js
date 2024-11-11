import { Button, Grid } from "@mui/material";

const AuthNavigation = ({ auth }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant={auth === "login" ? "contained" : "text"}
          color="primary"
          sx={{
            "&:hover": {
              color: auth === "login" ? "primary.main" : "secondary.main",
            },
            borderRadius: "1.5rem",
          }}
        >
          Login
        </Button>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Button
          variant={auth === "register" ? "contained" : "text"}
          color="primary"
          sx={{
            "&:hover": {
              backgroundColor:
                auth === "register" ? "primary.main" : "secondary.main",
            },
            borderRadius: "1.5rem",
          }}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthNavigation;
