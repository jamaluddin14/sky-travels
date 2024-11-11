import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import GroupIcon from "@mui/icons-material/Group";

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]; // Sample data for autocomplete

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        borderRadius: 25,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        width: "100%",
        maxWidth: 800,
      }}
    >
      {/* Location Input */}
      <Autocomplete
        freeSolo
        options={locations}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location"
            placeholder="Where are you going?"
            variant="standard"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="primary" />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        )}
        sx={{ flex: 1, ml: 1 }}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Distance Input */}
      <TextField
        label="Distance"
        variant="standard"
        placeholder="Distance k/m"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MapIcon color="primary" />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{ flex: 1 }}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Max People Input */}
      <TextField
        label="Max People"
        variant="standard"
        placeholder="0"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon color="primary" />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{ flex: 1 }}
      />

      {/* Search Button */}
      <IconButton color="primary" sx={{ ml: 2 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
