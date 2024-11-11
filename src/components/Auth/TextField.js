import TextField from "@mui/material/TextField";

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.75rem",
        },
      }}
      {...props}
      color="primary"
    />
  );
};

export default CustomTextField;
