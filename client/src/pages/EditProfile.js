import React from "react";
import { TextField, Box, Typography, Button, Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const EditProfile = () => {
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
