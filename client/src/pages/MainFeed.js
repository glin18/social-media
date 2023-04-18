import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  IconButton,
  Icon,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import jwt_decode from "jwt-decode";

const MainFeed = ({ setPage }) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const accessToken = localStorage.getItem("access token");
      const decoded = jwt_decode(accessToken);
      console.log(decoded);
      const id = decoded.id;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      return axios
        .get(`http://localhost:3001/user/${id}`, config)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    },
  });

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      const accessToken = localStorage.getItem("access token");
      const decoded = jwt_decode(accessToken);
      console.log(decoded);
      const id = decoded.id;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      return axios
        .get(`http://localhost:3001/post/`, config)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    },
  });

  const friendsQuery = useQuery({
    queryKey: ["friends"],
    queryFn: () => {
      const accessToken = localStorage.getItem("access token");
      const decoded = jwt_decode(accessToken);
      console.log(decoded);
      const id = decoded.id;
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      return axios
        .get(`http://localhost:3001/user/${id}/friends`, config)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  if (query.isLoading || postsQuery.isLoading || friendsQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (query.isError || postsQuery.isError || friendsQuery.isError) {
    return <span>An Error Occurred. Please try again</span>;
  }

  return (
    <div>
      <Grid container spacing={5}>
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
                <Avatar>
                  {query.data.firstName[0].toUpperCase()}
                  {query.data.lastName[0].toUpperCase()}
                </Avatar>
                <Box sx={{ mr: 5 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {query.data.firstName.charAt(0).toUpperCase() +
                      query.data.firstName.slice(1)}{" "}
                    {query.data.lastName.charAt(0).toUpperCase() +
                      query.data.lastName.slice(1)}
                  </Typography>
                  <Typography>{query.data.friends.length} Friends</Typography>
                </Box>
              </Box>
              <IconButton>
                <SettingsIcon onClick={() => setPage("edit profile")} />
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
                <Typography>{query.data.location}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <WorkIcon />
                <Typography>{query.data.occupation}</Typography>
              </Box>
            </Box>
            <hr></hr>
            <Box sx={{ padding: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Profile Views</Typography>
                <Typography>{query.data.viewedProfile}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Post Likes</Typography>
                <Typography>69</Typography>
              </Box>
            </Box>
            <hr></hr>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          {postsQuery.data.map((userPost) => (
            <Paper elevation={3} sx={{ mt: 5, height: 650 }}>
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
                {query.data._id !== userPost.userId && (
                  <IconButton
                    onClick={() => {
                      const accessToken = localStorage.getItem("access token");
                      const decoded = jwt_decode(accessToken);
                      const id = decoded.id;
                      const config = {
                        headers: { Authorization: `Bearer ${accessToken}` },
                      };
                      axios
                        .get(
                          `http://localhost:3001/user/${id}/${userPost.userId}`,
                          config
                        )
                        .then((res) => {
                          console.log(res.data);
                          queryClient.invalidateQueries(["user"]);
                          queryClient.invalidateQueries(["friends"]);
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    {query.data.friends.includes(userPost.userId) ? (
                      <PersonRemoveIcon />
                    ) : (
                      <PersonAddIcon />
                    )}
                  </IconButton>
                )}
              </Box>
              <hr></hr>
              <Typography sx={{ padding: 3 }}>
                {userPost.description}
              </Typography>

              {userPost.picturePath && (
                <Box
                  sx={{
                    padding: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={userPost.picturePath}
                    style={{
                      height: "360px",
                      width: "100%",
                    }}
                  ></img>
                </Box>
              )}
              <Typography sx={{ paddingLeft: 3 }}>
                Created:{" "}
                {userPost.createdAt.slice(0, 10) +
                  " " +
                  userPost.createdAt.slice(11, 16)}
              </Typography>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={3.5}>
          <Paper elevation={3} sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: "bold", pt: 3, pl: 3, pb: 2 }}>
              Friend List
            </Typography>
            <hr></hr>
            {friendsQuery.data.length === 0 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 3,
                  justifyContent: "space-between",
                }}
              >
                <Typography>No Friends</Typography>
              </Box>
            )}
            {friendsQuery.data.map((friend) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 3,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar>
                    {friend.firstName[0].toUpperCase()}
                    {friend.lastName[0].toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {friend.firstName.charAt(0).toUpperCase() +
                        friend.firstName.slice(1)}{" "}
                      {friend.lastName.charAt(0).toUpperCase() +
                        friend.lastName.slice(1)}
                    </Typography>
                    <Typography>Vancouver, BC</Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => {
                    const accessToken = localStorage.getItem("access token");
                    const decoded = jwt_decode(accessToken);
                    const id = decoded.id;
                    const config = {
                      headers: { Authorization: `Bearer ${accessToken}` },
                    };
                    axios
                      .get(
                        `http://localhost:3001/user/${id}/${friend._id}`,
                        config
                      )
                      .then((res) => {
                        console.log(res.data);
                        queryClient.invalidateQueries(["user"]);
                        queryClient.invalidateQueries(["friends"]);
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  <PersonRemoveIcon />
                </IconButton>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainFeed;
