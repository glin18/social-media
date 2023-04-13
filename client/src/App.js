import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Container from "@mui/material/Container";
import AuthNavbar from "./components/AuthNavbar";
import MainNavbar from "./components/MainNavbar";
import MainFeed from "./pages/MainFeed";

function App() {
  return (
    <div className="App">
      {/* <AuthNavbar /> */}
      <MainNavbar />
      <Container maxWidth="xl">
        {/* <Register /> */}
        {/* <Login /> */}
        <MainFeed />
      </Container>
    </div>
  );
}

export default App;
