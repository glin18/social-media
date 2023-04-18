import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import axios from "axios";
import jwt_decode from "jwt-decode";

const EditProfile = ({ setPage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const accessToken = localStorage.getItem("access token");
    const decoded = jwt_decode(accessToken);
    console.log(decoded);
    const id = decoded.id;
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    axios
      .post(
        `http://localhost:3001/user/${id}/edit`,
        {
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          location: data.get("location"),
          occupation: data.get("occupation"),
        },
        config
      )
      .then((res) => {
        console.log(res);
        setPage("main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <SettingsIcon />
        </Avatar>
        <Typography variant="h4">Register</Typography>
        <TextField
          id="outlined-basic"
          label="First Name"
          name="firstName"
          variant="outlined"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          name="location"
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Occupation"
          name="occupation"
          variant="outlined"
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <Button variant="contained" sx={{ mb: 3 }} type="submit">
          Edit Profile
        </Button>
      </Box>
    </div>
  );
};

export default EditProfile;
