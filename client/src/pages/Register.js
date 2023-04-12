import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Typography variant="h5" sx={{ mt: 5 }}>
        Register
      </Typography>
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
        label="Email"
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
        label="Email"
        variant="outlined"
        sx={{ maxWidth: 400, width: "100%", mb: 10 }}
      />
    </Box>
  );
};

export default Register;
