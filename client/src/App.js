import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Container from "@mui/material/Container";
import AuthNavbar from "./components/AuthNavbar";
import MainNavbar from "./components/MainNavbar";
import MainFeed from "./pages/MainFeed";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        {/* <AuthNavbar /> */}
        <MainNavbar />
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
