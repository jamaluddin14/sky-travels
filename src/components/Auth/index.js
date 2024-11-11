import Register from "./Register";
import Login from "./Login";
import { Container, Grid, Grid2 } from "@mui/material";
import Navbar from "../Navbar";
import AuthNavigation from "./Navigation";
// import { useParams} from "react-router-dom";
const Auth = () => {
  //   const auth = useParames().get("auth");
  const auth = "login";
  return (
    <>
      <Grid2 item xs={12} md={6}>
        <Navbar>
          <AuthNavigation auth={auth} />
        </Navbar>
      </Grid2>
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
