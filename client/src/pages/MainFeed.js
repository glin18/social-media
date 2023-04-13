import React from "react";
import { Grid, Paper, Avatar, Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MainFeed = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <Paper elevation={3} sx={{ mt: 5, height: 300 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Avatar>GL</Avatar>
              <div>
                <Typography>Gary Lin</Typography>
                <Typography>3 Friends</Typography>
              </div>
              <PersonAddIcon />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3.5}></Grid>
      </Grid>
    </div>
  );
};

export default MainFeed;
