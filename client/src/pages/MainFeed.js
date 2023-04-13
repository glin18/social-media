import React from "react";
import { Grid, Paper, Avatar, Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const MainFeed = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          <Paper elevation={3} sx={{ mt: 5, height: 600 }}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationOnIcon />
                <Typography>Taipei, Taiwan</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <WorkIcon />
                <Typography>Software Developer, DMS</Typography>
              </Box>
            </Box>
            <hr></hr>
            <Box sx={{ padding: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Profile Views</Typography>
                <Typography>6969</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Post Likes</Typography>
                <Typography>69</Typography>
              </Box>
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
