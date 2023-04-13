import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Container from "@mui/material/Container";
import AuthNavbar from "./components/AuthNavbar";
import MainNavbar from "./components/MainNavbar";
import MainFeed from "./pages/MainFeed";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [modes, setModes] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: modes,
    },
  });
  const toggleMode = () => {
    if (modes === "dark") {
      console.log("toggle");
      setModes("light");
    } else {
      setModes("dark");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        {/* <AuthNavbar /> */}
        <MainNavbar toggleMode={toggleMode} />
        <Container maxWidth="xl">
          {/* <Register /> */}
          {/* <Login /> */}
          <MainFeed />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
