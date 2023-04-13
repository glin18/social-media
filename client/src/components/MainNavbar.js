import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useTheme } from "@mui/material/styles";

const MainNavbar = () => {
  const theme = useTheme();

  const toggleMode = () => {
    if (theme.palette.mode === "dark") {
      console.log("toggle");
      theme.palette.mode = "light";
    } else {
      theme.palette.mode = "dark";
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Social Media
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="post"
          sx={{ mr: 2 }}
        >
          <AddBoxIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="mode"
          sx={{ mr: 2 }}
          onClick={toggleMode}
        >
          <LightModeIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="account"
          sx={{ mr: 2 }}
        >
          <AccountBoxIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
