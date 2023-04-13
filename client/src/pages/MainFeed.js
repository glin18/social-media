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
                justifyContent: "space-between",
                padding: 3,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar>GL</Avatar>
                <Box sx={{ mr: 5 }}>
                  <Typography sx={{ fontWeight: "bold" }}>Gary Lin</Typography>
                  <Typography>3 Friends</Typography>
                </Box>
              </Box>
              <PersonAddIcon />
            </Box>
            <hr></hr>
          </Paper>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3.5}></Grid>
      </Grid>
    </div>
  );
};

export default MainFeed;
