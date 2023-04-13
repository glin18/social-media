import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import AddBoxIcon from "@mui/icons-material/AddBox";

const NewPost = () => {
  const handleSubmit = () => {};

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
