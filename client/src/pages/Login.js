import React, { useState } from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const Login = ({ setPage }) => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios
      .post("http://localhost:3001/auth/login", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access token", res.data.token);
        setError("");
        setPage("main");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4">Login</Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <Button variant="contained" sx={{ mb: 3 }} type="submit">
          Login
        </Button>
        {error && <Typography>{error}</Typography>}
      </Box>
    </div>
  );
};

export default Login;
