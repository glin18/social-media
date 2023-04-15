import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import jwt_decode from "jwt-decode";

const NewPost = ({ setPage }) => {
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
    const params = {
      userId: id,
      description: data.get("description"),
      location: data.get("location"),
    };
    console.log(params);

    axios
      .post("http://localhost:3001/post/create", params, config)
      .then((res) => {
        console.log(res.data);
        setPage("main");
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
          <AddBoxIcon />
        </Avatar>
        <Typography variant="h4">Add Post</Typography>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Location"
          name="location"
          variant="outlined"
          required
          sx={{ maxWidth: 400, width: "100%" }}
        />
        <Button variant="contained" sx={{ mb: 3 }} type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default NewPost;
