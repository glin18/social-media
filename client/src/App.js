import "./App.css";
import Register from "./pages/Register";
import Container from "@mui/material/Container";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container maxWidth="xl">
        <Register />
      </Container>
    </div>
  );
}

export default App;
