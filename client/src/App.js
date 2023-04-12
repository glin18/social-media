import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Container from "@mui/material/Container";
import AuthNavbar from "./components/AuthNavbar";

function App() {
  return (
    <div className="App">
      <AuthNavbar />
      <Container maxWidth="xl">
        {/* <Register /> */}
        <Login />
      </Container>
    </div>
  );
}

export default App;
