import React, { useState } from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import jwt_decode from "jwt-decode";

const NewPost = ({ setPage }) => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);
    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    // console.log(data.get("file"));
    const cloudinaryData = new FormData();
    for (const file of fileInput.files) {
      cloudinaryData.append("file", file);
    }
    cloudinaryData.append("upload_preset", "crjkt4sn");
    const cloudinaryResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/deabe2phl/image/upload",
      cloudinaryData
    );
    const secure_url = cloudinaryResponse.data.secure_url;
    console.log(secure_url);
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
      picturePath: secure_url,
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
        <input type="file" name="file"></input>
        <Button variant="contained" sx={{ mb: 3 }} type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default NewPost;
