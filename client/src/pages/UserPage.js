import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import jwt_decode from "jwt-decode";

const UserPage = () => {
  const userPostsQuery = useQuery({
    queryKey: ["userPosts"],
    queryFn: () => {
      const accessToken = localStorage.getItem("access token");
      const decoded = jwt_decode(accessToken);
      console.log(decoded);
      const id = decoded.id;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      return axios
        .get(`http://localhost:3001/post/${id}/posts`, config)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    },
  });

  if (userPostsQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (userPostsQuery.isError) {
    return <span>An Error Occurred. Please try again</span>;
  }

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={5}>
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
              <IconButton>
                <SettingsIcon />
              </IconButton>
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
          <Paper elevation={3} sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: "bold", pt: 3, pl: 3, pb: 2 }}>
              Friend List
            </Typography>
            <hr></hr>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar>RL</Avatar>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Robert Lin
                  </Typography>
                  <Typography>Vancouver, BC</Typography>
                </Box>
              </Box>
              <IconButton>
                <PersonRemoveIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          {userPostsQuery.data.map((userPost) => (
            <Paper elevation={3} sx={{ mt: 5, height: 600 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 3,
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar>
                    {userPost.firstName[0].toUpperCase()}
                    {userPost.lastName[0].toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {userPost.firstName.charAt(0).toUpperCase() +
                        userPost.firstName.slice(1)}{" "}
                      {userPost.lastName.charAt(0).toUpperCase() +
                        userPost.lastName.slice(1)}
                    </Typography>
                    <Typography>{userPost.location}</Typography>
                  </Box>
                </Box>
                <IconButton>
                  <PersonAddIcon />
                </IconButton>
              </Box>
              <hr></hr>
              <Typography sx={{ padding: 3 }}>
                {userPost.description}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPage;
