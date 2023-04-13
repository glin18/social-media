import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";

const Welcome = () => {
  return (
    <Box
      sx={{
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" align="center">
        Welcome to Social Media
      </Typography>
      <hr></hr>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button variant="outlined">Register</Button>
        <Button variant="outlined">Login</Button>
      </Box>
    </Box>
  );
};

export default Welcome;
