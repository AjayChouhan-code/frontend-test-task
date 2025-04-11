import { Box, CircularProgress, Typography } from "@mui/material";
import { customStylesCircularProgress } from "../../constants/styles";

const Loading = () => {
  return (
    <>
      <Box sx={customStylesCircularProgress}>
        <CircularProgress size={48} thickness={7} sx={{ color: "#6833FF" }} />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#999FAA",
          textAlign: "start",
          marginTop: "50",
          marginBottom: "50",
        }}
      >
        Searching ...
      </Typography>
    </>
  );
};

export default Loading;
