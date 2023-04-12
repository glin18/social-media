import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const AuthNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
            Social Media
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthNavbar;
