import "./App.css";
import Register from "./pages/Register";
import Container from "@mui/material/Container";
import AuthNavbar from "./components/AuthNavbar";

function App() {
  return (
    <div className="App">
      <AuthNavbar />
      <Container maxWidth="xl">
        <Register />
      </Container>
    </div>
  );
}

export default App;
