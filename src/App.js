import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CustomTextField from "./components/Auth/TextField";
import CustomButton from "./components/Auth/Button";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Auth from "./components/Auth";
import TravelGallery from "./components/Home/TravelGallery";
import Home from "./components/Home";
import ImageCard from "./components/Home/TourImageCard";
import GridLayout from "./components/Home/Explore";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
