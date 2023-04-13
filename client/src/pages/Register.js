import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const Register = ({ setPage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
    axios
      .post("http://localhost:3001/auth/register", {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        setPage("main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
      <Typography variant="h4">Register</Typography>
      <TextField
        id="outlined-basic"
        label="First Name"
        name="firstName"
        variant="outlined"
        required
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        name="lastName"
        required
        sx={{ maxWidth: 400, width: "100%" }}
      />
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
      <TextField
        id="outlined-basic"
        label="Repeat Password"
        variant="outlined"
        type="password"
        required
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <Button variant="contained" sx={{ mb: 3 }} type="submit">
        Register
      </Button>
    </Box>
  );
};

export default Register;
