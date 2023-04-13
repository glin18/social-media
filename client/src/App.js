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
import NewPost from "./pages/NewPost";
import Welcome from "./pages/Welcome";

function App() {
  const [modes, setModes] = useState("dark");
  const [page, setPage] = useState("main");

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

      {/* <AuthNavbar /> */}
      <MainNavbar toggleMode={toggleMode} />
      <Container maxWidth="xl">
        {!localStorage.getItem("access token") &&
        (page === "main" || page === "new post") ? (
          <Welcome />
        ) : page === "main" ? (
          <MainFeed />
        ) : page === "login" ? (
          <Login />
        ) : page === "register" ? (
          <Register />
        ) : page === "new post" ? (
          <NewPost />
        ) : (
          <Welcome />
        )}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <MainFeed /> */}
        {/* <NewPost /> */}
        {/* <Welcome /> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
