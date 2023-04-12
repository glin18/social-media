import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4">Register</Typography>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Repeat Password"
        variant="outlined"
        type="password"
        sx={{ maxWidth: 400, width: "100%" }}
      />
      <Button variant="contained">Register</Button>
    </Box>
  );
};

export default Register;
